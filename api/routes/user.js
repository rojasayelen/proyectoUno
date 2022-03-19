'use stritc'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

//creamos la ruta 
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);

module.exports = api;