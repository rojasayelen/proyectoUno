'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = Schema({
    name: {type: String, required: true},
    descripcion: {type: String, required: true},
    image: {type: String, required: true},
    //vote: {}
});

module.exports = mongoose.model('Post', PostSchema);