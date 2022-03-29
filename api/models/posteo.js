'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PosteoSchema = Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String},
    //vote: {}
});

module.exports = mongoose.model('Posteo', PosteoSchema);