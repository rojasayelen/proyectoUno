'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const roleSchema = new Schema ({
    name: String,
}, {
    versionKey: false
});

module.exports = mongoose.model('Role', roleSchema);