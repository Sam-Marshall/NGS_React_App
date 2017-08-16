// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

require('dotenv').config();
const https = require('https');

const multer = require('multer');

const fs = require('fs');
const parse = require('csv-parse');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("Multer disk storage (destination)");
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    console.log("Multer disk storage (filename): "+file.fieldname);
    req.filename = file.fieldname+'-'+Date.now();
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage });

// Require Models
var db = require("./models");

// Create Instance of Express
var app = express();

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

// Configure database parameters for session manangement
const sessionOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

const sessionStore = new MySQLStore(sessionOptions);

// Configure the session management for the app.
app.use(session({
    key: process.env.SESSION_KEY,
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

// Sets a port
var PORT = process.env.PORT || 8080;
var RESYNCDB = process.env.RESYNC_DB || false;

// Run Morgan for Logging
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

require("./routes/apiroutes.js")(app);

const slack_cid = process.env.SLACK_CID;
const slack_secret = process.env.SLACK_SECRET;
const slack_redirect = process.env.SLACK_REDIRECT || 'http://localhost/auth/slack/redirect';

function getSlackAccessToken(code, callback) {

    return https.get({
        host: 'slack.com',
        path: '/api/oauth.access?client_id='+slack_cid+'&client_secret='+slack_secret+'&code='+code+'&redirect_uri='+slack_redirect
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            var parsed = JSON.parse(body);
            callback(parsed);
        });
    });

}

app.get('/auth/slack/redirect/', function(req, res) {
  console.log("Auth redirect");
  getSlackAccessToken(req.query.code, function(data) {
    console.log("Slack auth token response. ",data);
    req.session.authenticated = true;
    req.session.username = data.user.name;
    res.redirect('/');
  });
});

app.post('/sample/upload', upload.single('samplefile'), function(req, res, next) {
  console.log('Sample file was uploaded and stored as: '+req.filename);

  var rowsProcessed = 0;
  var rowsRead = 0;
  var samples = [];
  var sampleTypeId = 0;
  var speciesId = 0;
  var alignmentGenome = 0;
  var userId = 0;
  var endOfFile = false;
//Iterate over file, skipping first 4 lines
  fs.createReadStream("uploads/"+req.filename)
    .pipe(parse({auto_parse: true, from: 5}))
    .on('data', function(cols) {
      rowsRead++;
      //Get id for sampletype
      db.SampleType.findOne({
          where: {
            name: cols[4]
          }
      }).then(function(resp) {
        sampleTypeId = resp.id;
        //Get id for species
        db.Species.findOne({
            where: {
              name: cols[1]
            }
          }).then(function(resp) {
              speciesId = resp.id;
              //Get id for alignment genome
              db.AlignmentGenome.findOne({
                 where: {
                   name: cols[2]
                 }
              }).then(function(resp) {
                   alignmentGenomeId = resp.id;
                   // Get id of user with initials
                   db.User.findOne({
                      where: {
                        initials: cols[5]
                      }
                   }).then(function(resp) {
                      userId = resp.id;
                      db.Sample.create({
                        name: cols[3],
                        project_id: 1,
                        sampletype_id: sampleTypeId,
                        species_id: speciesId,
                        alignmentgenome_id: alignmentGenomeId
                      }).then(function(record) {
                           console.log(record.id);
                           rowsProcessed++;
                           samples.push({id: record.id, name: cols[3], sampletype:cols[4], species:cols[1], alignmentgenome: cols[2], inits:cols[5]});
                           if (endOfFile & (rowsProcessed == rowsRead)) {
                             res.json({"status": "OK", "statuscode": 200, "nrows":rowsProcessed, "samples":samples});
                           }
                         });
                     })
                 })
            });
        });  
    })
    .on('end', function() {
      console.log("End of file. nRows: "+rowsRead);
      endOfFile = true;
//      res.json({"status": "OK", "statuscode": 200, "nrows":nRows, "samples":samples});
    });

})

app.get('/user/', function(req, res) {
  console.log("User request.");
  db.User.findAll({
      include: [db.Role]
    }).then(function(records) {
    res.json({users: records});
  });
//  res.json({"users":[{"username":"gpcrawford"}, {"username":"marjorie.k"}, {"username":"sam-marshall"}]});
});


app.post('/user/', function(req, res) {
  console.log("User POST");
  db.User.findOrCreate({where:{userName:"gpcrawford"}, defaults:{role_id: 1, firstName:"Greg", lastName:"Crawford", email:"gpcrawford@northwestern.edu", initials:"gpc", password:""}})
      .spread((user, created) => {
        console.log(created)
      })
  res.json({"status":"OK", "statuscode":200});
});

if (RESYNCDB) {
  db.sequelize.sync({ force: true }).then(function() {
      db.Role.buildDev();
      db.User.buildDev();
      db.Species.buildDev();
      db.AlignmentGenome.buildDev();
      db.SampleType.buildDev();
      db.Project.buildDev();
      app.listen(PORT, function() {
          console.log("App listening on PORT: " + PORT);
      });
  });
} else {
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
}

