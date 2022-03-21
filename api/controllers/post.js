'use strict'

var path = require('path');
var fs = require('fs');

var Feed = require('../models/feed');
var Panel = require('../models/panel');
var Post = require('../models/post');
//const { restart } = require('nodemon');

function getPost(req, res){
    var postId = req.params.id;

    Post.findById(postId, (err, post)=>{
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

function savePost(req, res){
    var post = new Post();
    

    var params = req.body;
    post.name = params.name;
    post.description = params.description;
    post.image = 'null';

    post.save((err, postStored)=>{
        if(err){
            console.log(params);
            res.status(500).send({message: 'error al guardar el post'});
        }else{
            if(!postStored){
                res.status(404).send({message: 'el post no ha sido guardado'});
            }else{
                res.status(200).send({post: postStored});
            }
        }
    });
}


function deletePost(req, res){
    var postId = req.params.id;
    
    Post.findByIdAndRemove(postId, (err, postRemoved)=>{
        if(err){
            res.status(500).send({message: 'error al intentar eliminar el post'});
        }else{
            if(!postId){
                restart.status(404).send({message: 'el post no ha sido eliminado'});
            }else{
                res.status(200).send({postId});
            }
        }
    });
}

function uploadImage(req, res){
    var postId = req.params.id;
    var file_name = "foto no subida";

    if(req, files){
        var file_path = req.files.image.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[2];

        var exp_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif'){
            
            Post.findByIdAndUpdate(PostId, {image: file_name}, (err, postUpdated)=>{
                if(!postUpdated){
                    res.status(404).send({message: 'no se ha podido actualizar el post'});
                }else{
                    res.status(200).send({post: postUpdated});
                }
            });
        }else{
            res.status(200).send({message: 'extensión de archivo no válida'});
        }
    }else{
        res.status(200).send({message: 'no se ha subido ninguna imagen'});
    }
}

function getImageFile(req, res){
    var imageFile = req.params.imageFile;
    var path_file = './uploads/post/' + imageFile;

    fs.exists(path_file, function(exists){
        if(exists){
            res.sendFile(path.resolve(path_file));
        }else{
            res.status(200).send({message: 'no existe la imagen'});
        }
    });
}

module.exports = {
    getPost,
    savePost,
    deletePost,
    uploadImage,
    getImageFile
}