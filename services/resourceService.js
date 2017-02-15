var Bluebird = require('bluebird');
var rp = require('request-promise');

module.exports = {

  getAll: function(res) {
    var getCustomers = rp('http://localhost:8888/api/customers');
    var getUsers     = rp('http://localhost:8888/api/users');
    var getCountries = rp('http://localhost:8888/api/countries');

    Bluebird.all([getCustomers, getUsers, getCountries])
        .spread(function (customersResponse, usersResponse, countriesResponse) {
            var response = {};
            response.customers = JSON.parse(customersResponse);
            response.users = JSON.parse(usersResponse);
            response.countries = JSON.parse(countriesResponse);
            res.json(response);
            res.end();
        })
        .catch(function (err) {
            res.json({info: 'error during fetching resources', error: err});
            res.end();
        });
  },
  
  // ***********************************************************************************  

  getCustom: function(res, params) {
	var requests = [];
    var properties = [];

    Object.keys(params).forEach(function(key) {
        var url = 'http://localhost:8888/'+ params[key];
        console.log(url);
        var newRequest = rp(url);
        requests.push(newRequest);
        properties.push(key);
    });
     
    Bluebird.all(requests)
    .then(function (data) {
        var response = {};

        for (var i = 0; i < data.length; i++) {
            var currentPropery = JSON.parse(data[i]);
            response[properties[i]] = currentPropery.data;
        }
        res.json(response);
        res.end();
    })
    .catch(function (err) {
        res.json({info: 'error during fetching resources', error: err});
        res.end();
    });

  }

   // ***********************************************************************************  

};
