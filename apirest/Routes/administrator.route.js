/*---------------------------------------
REQUERIMIENTOS
--------------------------------------*/
const express = require('express');
const app = express();

/*---------------------------------------
Importamos el controlador
--------------------------------------*/

const Admin = require('../Controllers/administrator.controller');

/*---------------------------------------
Creamos las rutas HTTP
--------------------------------------*/

app.get('/mostrar-administradores', Admin.mostrarAdministradores);

app.post('/crear-administradores', Admin.crearAdministrador);

app.put('/editar-administradores/:id', Admin.editarAdministrador);

app.delete('/eliminar-administradores/:id', Admin.eliminarAdministrador);

app.post('/login', Admin.login);

/*---------------------------------------
Exportamos la ruta
--------------------------------------*/

module.exports = app;