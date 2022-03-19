'use strict'

var path = require('path');
var fs = require('fs');
var Feed = require('../models/feed');
var Panel = require('../models/panel');
var Post = require('../models/post');

// function getPost(req, res){
//     res.status(200).send({message: 'probando el controlador de post'});
// }

function savePost(req, res){
    var post = new Post();
    var params = req.body;
    post.name = params.name;
    post.description = params.description;
    post.image = null;

    post.save((err, postStored)=>{
        if(err){
            res.status(500).send({message: 'error al guardar el post'});
        }else{
            if(!postStored){
                res.status(404).send({message: 'el post no ha sido guardado'});
            }else{
                res.status(200).send({mesage: 'el post ha sido guardado'});
            }
        }
    });
}

function getPost(req, res){
    var postId = req.params.id;

    Post.findById(postId, (err, post) =>{
        if(err){
            res.status(500).send({message: 'error en la petición'});
        }else{
            if(!post){
                res.status(404).send({message: 'el post no existe'});
            }else{
                res.status(200).send({post});
            }
        }
    });
}

module.exports = {
    getPost,
    savePost
}