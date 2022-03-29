'use strict'

var path = require('path');
var fs = require('fs');

var Feed = require('../models/feed');
var Panel = require('../models/panel');
var Posteo = require('../models/posteo');
const { restart } = require('nodemon');

function getPosteo(req, res){
    var poseotId = req.params.id;

    Posteo.findById(posteoId, (err, posteo)=>{
        if(err){
            res.status(500).send({message: 'error en la petición'});
        }else{
            if(!posteo){
                res.status(404).send({message: 'el posteo no existe'});
            }else{
                res.status(200).send({posteo});
            }
        }
    });
}

function savePosteo(req, res) {
    var posteo = new Posteo();
    
    var params = req.body;
    
    //console.log(params);

    posteo.name = params.name;
    posteo.description = params.description;
    posteo.image = 'null';

    posteo.save((err, posteoStored) => {
        if(err){
            res.status(500).send({message: 'error al guardar el posteo'});
        }else{
            if(!posteoStored){
                res.status(404).send({message: 'el posteo no ha sido guardado'});
            }else{
                res.status(200).send({posteo: posteoStored});
            }
        }
    });
}


function deletePosteo(req, res){
    var posteoId = req.params.id;
    
    Posteo.findByIdAndRemove(posteoId, (err, posteoRemoved)=>{
        if(err){
            res.status(500).send({message: 'error al intentar eliminar el posteo'});
        }else{
            if(!posteoId){
                restart.status(404).send({message: 'el posteo no ha sido eliminado'});
            }else{
                res.status(200).send({posteoId});
            }
        }
    });
}

function uploadImage(req, res){
    var posteoId = req.params.id;
    var file_name = "foto no subida";

    if(req, files){
        var file_path = req.files.image.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[2];
       
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif'){
            
            Posteo.findByIdAndUpdate(posteoId, {image: file_name}, (err, posteoUpdated) => {
                if(!posteoUpdated){
                    res.status(404).send({message: 'no se ha podido actualizar el posteo'});
                }else{
                    res.status(200).send({posteo: posteoUpdated});
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
    var path_file = './uploads/posteos/' +imageFile;

    fs.exists(path_file, function(exists){
        if(exists){
            res.sendFile(path.resolve(path_file));
        }else{
            res.status(200).send({message: 'no existe la imagen'});
        }
    });
}

module.exports = {
    getPosteo,
    savePosteo,
    deletePosteo,
    uploadImage,
    getImageFile
};