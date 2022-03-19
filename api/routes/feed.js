'use strcit'

var express = require('express');
var FeedController = require('../controllers/feed');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/feed', md_auth.ensureAuth, FeedController.getFeed);
api.post('/feed', md_auth.ensureAuth, FeedController.saveFeed);
module.exports = api;

