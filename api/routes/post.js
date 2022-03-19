'use strcit'

var express = require('express');
var PostController = require('../controllers/feed');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/post/id', md_auth.ensureAuth, PostController.getPost);
api.post('/post', md_auth.ensureAuth, FeedController.savePost);
module.exports = api;

