'use strict'

var express = require('express');
var PostController = require('../controllers/post');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/post'});     

api.get('/post/id', md_auth.ensureAuth, PostController.getPost);
api.post('/post', md_auth.ensureAuth, PostController.savePost);
api.delete('/post/id', md_auth.ensureAuth, PostController.deletePost);
api.post('/upload-image-post/:id', [md_auth.ensureAuth, md_upload], PostController.uploadImage);
api.get('get-image-post/:imageFile', PostController.getImageFile);

module.exports = api;

