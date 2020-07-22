/*---------------------------------------
REQUERIMIENTOS
--------------------------------------*/
const express = require('express');
const app = express();


/*---------------------------------------
Importamos el controlador
--------------------------------------*/

const User = require('../Controllers/user.controller');

/*---------------------------------------
Creamos las rutas HTTP
--------------------------------------*/

app.get('/mostrar-usuarios', User.mostrarUsuarios);

app.post('/crear-usuario', User.crearUsuario);

app.post('/login-usuario', User.loginUsuario);

/*---------------------------------------
Exportamos la ruta
--------------------------------------*/

module.exports = app;