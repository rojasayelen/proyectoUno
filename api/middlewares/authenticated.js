'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta';


exports.ensureAuth = function(req, res, next){
    if(!req.headers.authorization){
        return res.status(403).send({message: 'la peticion no tiene la cabecera de autenticación'});
    }

    var token = req.headers.authorization.replace(/['"]+/g, "");

    try{
        var payload = jwt.decode(token, secret);

        if(payload.ex <= moment().unix()){
            return res.satatus(401).send({message: 'el token ha expirado'});
        }
    }catch(ex){
        console.log(ex);
        return res.satatus(404).send({message: 'el token no es válido'});
    }

    req.user = payload;

    next();
};