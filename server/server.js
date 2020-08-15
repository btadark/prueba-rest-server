require('./config/config');
const db =require('./config/db');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
db();

const bodyParser = require('body-parser'); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Definimos el puerto
const port = process.env.PORT || 4000

//app.use(express.json({ extend: true }));
app.use( require('./routes/usuario') );


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});