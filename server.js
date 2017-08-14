// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

require('dotenv').config();
const https = require('https');

const multer = require('multer');

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

//const upload = multer( {dest: 'uploads/'});
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
const slack_redirect = process.env.SLACK_REDIRECT || 'http://localhost';

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


  res.json({"status": "OK", "statuscode": 200});
})

app.get('/user/', function(req, res) {
  console.log("User request.");
  res.json({"users":[{"username":"gpcrawford"}, {"username":"marjorie.k"}, {"username":"sam-marshall"}]});
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
      db.Species.buildDev();
      db.AlignmentGenome.buildDev();
      db.SampleType.buildDev();
      app.listen(PORT, function() {
          console.log("App listening on PORT: " + PORT);
      });
  });
} else {
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
}

