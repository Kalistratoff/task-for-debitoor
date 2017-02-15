
var express  = require('express');
var app      = express();                             
var mongoose = require('mongoose');                     
var morgan = require('morgan');             
var bodyParser = require('body-parser');    
var methodOverride = require('method-override');

// configuration =================
mongoose.connect('mongodb://admin:Pgse6jAKFTqbSZwjzx2kGf76@ds153239.mlab.com:53239/debitoor-task-data');     

app.use(express.static(__dirname + '/public'));                 
app.use(morgan('dev'));                                         
app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); //
app.use(methodOverride());


var countryRoutes = require('./routes/countryRoutes.js')(app);
var userRoutes = require('./routes/userRoutes.js')(app);
var customerRoutes = require('./routes/customerRoutes.js')(app);
var resourcesRoutes = require('./routes/resourseRoute.js')(app);

 app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
var port = 8888;
app.listen(port);
console.log("Magic happens on port " + port);