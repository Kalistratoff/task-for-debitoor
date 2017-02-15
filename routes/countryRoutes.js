var Country = require('../models/country.js');

module.exports = function(app) {

   /* Get all */
   app.get('/api/countries', function (req, res, next) {
        Country.find(function(err, countries) {
            if (err) {
                res.json({info: 'error during find countries', error: err});
                res.end();
            };
            res.json({resource:"countries", data: countries});
        });
    });

   /* Get country by id */
   app.get('/api/countries/:id', function (req, res, next) {
        Country.findById(req.params.id, function(err, country) {
            if (err) {
                res.json({info: 'error during find country', error: err});
                res.end();
            };
            if (country) {
                res.json({resource:"countries", data: country});
            } else {
                res.json({info: 'country not found'});
                res.end();
            }
        });
    });

};
