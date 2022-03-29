'use strict'

var express = require('express');
var PosteoController = require('../controllers/posteo');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/posteos'});     

api.get('/posteo/:id', md_auth.ensureAuth, PosteoController.getPosteo);
api.post('/posteo', md_auth.ensureAuth, PosteoController.savePosteo);
api.delete('/posteo/id', md_auth.ensureAuth, PosteoController.deletePosteo);
api.post('/upload-image-posteo/:id', [md_auth.ensureAuth, md_upload], PosteoController.uploadImage);
api.get('get-image-posteo/:imageFile', PosteoController.getImageFile);

module.exports = api;

