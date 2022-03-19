
'use strict'

const mongoose = require('mongoose');
const app = require('./app');
var port = process.env.PORT || 3977;


//capturar body

//conexión a la BS MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/users', (err, res) => {
    if(err){
        throw err;
        }else{
        console.log("La BBDD está corriendo CORRECTAMENTE");
        app.listen(port, function(){
            console.log("servidor del api rest escuchando en http://localhost:" + port);
        });
    }
});


