var Customer = require('../models/customer.js');

module.exports = function(app) {

   /* Get all */
   app.get('/api/customers', function (req, res) {
        Customer.find(function(err, customers) {
            if (err) {
                res.json({info: 'error during find customers', error: err});
                res.end();
            };
            res.json({resource:"customers", data: customers});
        });
    });

   /* Get Customer by id */
   app.get('/api/customers/:id', function (req, res) {
        Customer.findById(req.params.id, function(err, customer) {
            if (err) {
                res.json({info: 'error during find customer', error: err});
                res.end();
            };
            if (customer) {
                res.json({resource:"customers", data: customer});
            } else {
                res.json({info: 'customer not found'});
                res.end();
            }
        });
    });

};
