var db = require('../models');

module.exports = function(app) {
    //Gets user and corresponding role information
    app.get('/api/user/:userid', function(req, res) {
        db.User.findOne({
                where: {
                    id: req.params.userid
                },
                include: {
                    model: db.Role
                }
            }).then(function(response) {
                res.send(response);
            });
    });

    //Gets sample information by project id
    app.get('/api/project/:projectid', function(req, res) {
        db.Sample.findAll({
                include: [{ 
                	model: db.Project, 
                	where: {
                		id: req.params.projectid
                	},
                	include:{
                		model: db.User
                	}
                },{ 
                	model: db.SampleType 
                },{ 
                	model: db.Species 
                },{ 
                	model: db.AlignmentGenome 
                },]
            }).then(function(response) {
                res.send(response);
            });
    });

}