'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta';


exports.createToken = function(user){
    var payload = {
        sub: user._id,   //guarda el id del registro
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role, //accede a las propiedades que tiene el objeto user
        iat: moment().unix(), //saca la fecha en formato unix
        exp: moment().add(30, 'days').unix()
    };

    return jwt.encode(payload, secret); //utiliza una clave secreta

}
