require('./config/config');
const db =require('./config/db');
const express = require('express');

const app = express();
db();

const bodyParser = require('body-parser'); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Definimos el puerto
const port = process.env.PORT || 4000

//app.use(express.json({ extend: true }));

// Configuracion de las rutas
app.use( require('./routes/index'));


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});