var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({

    membership : String,
    age: Number,
    eyeColor : String,
    name : String,
    gender : String,
    company : String,
    email : String,
    phone : String,
    address : String,
    registered : { type: Date, default: Date.now }
});

module.exports = mongoose.model('Customer', customerSchema);
