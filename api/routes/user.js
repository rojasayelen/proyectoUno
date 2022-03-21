'use stritc'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

//api.use(express.json()); //a pedido del frontend


//creamos la ruta 
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);


module.exports = api;