var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({

    name : String,
    code : String

});

module.exports = mongoose.model('Country', countrySchema);
