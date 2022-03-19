'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PanelSchema = Schema({
    title: {type: String},
    description: {type: String},
    image: {type: String},
    //role: {type: ROLE_ADMIN}
});

module.exports = mongoose.model('Panel', PanelSchema);