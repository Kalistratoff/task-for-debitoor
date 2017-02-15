var User = require('../models/user.js');

module.exports = function(app) {

   /* Get all */
   app.get('/api/users', function (req, res) {
        User.find(function(err, users) {
            if (err) {
                res.json({info: 'error during find users', error: err});
                res.end();
            };
            res.json({resource:"users", data: users});
        });
    });

   /* Get User by id */
   app.get('/api/users/:id', function (req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) {
                res.json({info: 'error during find user', error: err});
                res.end();
            };
            if (user) {
                res.json({resource:"users", data: user});
            } else {
                res.json({info: 'user not found'});
                res.end();
            }
        });
    });

};
