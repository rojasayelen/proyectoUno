'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


var app = express();
app.use(cors());


//require('dotenv').config();

//cargar rutas
var user_routes = require('./routes/user');

//configuración del body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar las cabeceras http

//rutas base    
//app.use('/api', user_routes); //estoy utilizando un middleware 
app.use('/api', user_routes);

module.exports = app;