// import express
const express = require('express');

// configuracion de variables de entorno
require('dotenv').config()

// importo la conexion a la base de datos
const dbConnection = require('./db/db.config');

// conectar base de datos
dbConnection();

// creo una instancia de express y la guardo en app
const app = express();

// lectura y parseo del body
app.use( express.json() );


// creo mi grupo de rutas
app.use( '/api/v1/auth', require('./routes/auth.routes') );
app.use('/api/v1/products', require('./routes/products.routes'))

// TODO: CRUD: Products

const PORT = process.env.PORT || 8080;

// inicializacion de nuestro server escuchando en el puerto 8080
app.listen( PORT , ()=>{
    console.log('Servidor corriendo en puerto 8080')
})
