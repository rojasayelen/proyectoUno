'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedSchema = Schema({
    name: {type: String, required: true},
    descripcion: {type: String, required: true},
    post: {type: String},
    //vote: 
});

module.exports = mongoose.model('Feed', FeedSchema);