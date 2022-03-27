'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: {type: String, required: true, min: 3, max: 30},
    surname: {type: String, required: true, min: 3, max: 30},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: [{
        ref: "Role", 
        type: Schema.Types.ObjectId
    }],
    extras: {
        versionKey: false,
    }
});

module.exports = mongoose.model('User', UserSchema);