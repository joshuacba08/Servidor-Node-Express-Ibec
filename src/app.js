// importo express
const express = require('express');

// creo una instancia de express y la guardo en app
const app = express();

// lectura y parseo del body
app.use( express.json() );


// creo mi grupo de rutas
app.use( '/api/v1/auth',require('./routes/auth.routes') );


// inicializacion de nuestro server escuchando en el puerto 8080
app.listen( 8080 , ()=>{
    console.log('Servidor corriendo en puerto 8080')
})
