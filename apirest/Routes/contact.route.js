/*---------------------------------------
REQUERIMIENTOS
--------------------------------------*/
const express = require('express');
const app = express();

/*---------------------------------------
Importamos el controlador
--------------------------------------*/
const Contact = require('../Controllers/contact.controller');

/*---------------------------------------
Creamos las rutas HTTP
--------------------------------------*/
app.post('/send-email', Contact.sendEmail);

/*---------------------------------------
Exportamos la ruta
--------------------------------------*/

module.exports = app;