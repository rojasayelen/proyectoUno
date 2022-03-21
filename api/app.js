'use strict'

var express = require('express');
var bodyParser = require('body-parser');
//var cors = require('cors');


var app = express();

//app.use(cors());


//require('dotenv').config();

//cargar rutas
var user_routes = require('./routes/user');
//var feed_routes = require('./routes/feed');
var post_routes = require('./routes/post');

//configuración del body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//configurar las cabeceras http

//rutas base    
//estoy utilizando un middleware 
app.use('/api', user_routes);
//app.use('/api', feed_routes); 
app.use('/api', post_routes);



module.exports = app;