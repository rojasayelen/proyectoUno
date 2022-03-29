'use strict'

var path = require('path');
var fs = require('fs');
var Feed = require('../models/feed');
var Panel = require('../models/panel');
var Post = require('../models/posteo');

function getFeed(req, res){
    res.status(200).send({message: 'probando el controlador de feed'});
}

function saveFeed(req, res){
    var feed = new Feed();
    var params = req.body;
    feed.name = params.name;
    feed.description = params.description;
    feed.post = params.post;

    feed.save((err, feedStored)=>{
        if(err){
            res.status(500).send({message: 'error al guardar el feed'});
        }else{
            if(!feedStored){
                res.status(404).send({message: 'el feed no ha sido guardado'});
            }else{
                res.status(200).send({mesage: 'el feed ha sido guardado'});
            }
        }
    });
}

//getFeed ??

module.exports = {
getFeed,
saveFeed
}
//var mongoosePaginate = require('mongoose-pagination');


