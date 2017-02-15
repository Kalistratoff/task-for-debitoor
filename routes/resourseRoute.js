var resourceService = require('../services/resourceService.js');

module.exports = function(app) {
   /* Get all or Custom*/
   app.get('/api/resources', function (req, res, next) {
        if(req.url === '/api/resources'){
            resourceService.getAll(res);
        }
        else{
           resourceService.getCustom(res, req.query);
        }
    });
};
