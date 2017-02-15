var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

    name : String,
    gender : String,
    email : String,
    registered : { type: Date, default: Date.now }

});

module.exports = mongoose.model('User', userSchema);
