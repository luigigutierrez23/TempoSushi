/*---------------------------------------
REQUERIMIENTOS
--------------------------------------*/
const express = require('express');
const app = express();


/*---------------------------------------
Importamos el controlador
--------------------------------------*/

const Galeria = require('../Controllers/gallery.controller');

/*---------------------------------------
Creamos las rutas HTTP
--------------------------------------*/

app.get('/mostrar-galeria', Galeria.mostrarGaleria);

app.post('/crear-galeria',  Galeria.crearGaleria);

app.put('/editar-galeria/:id',  Galeria.editarGaleria);

app.delete('/eliminar-galeria/:id',  Galeria.eliminarGaleria);

app.get('/mostrar-img-galeria/:image', Galeria.mostrarImg);

/*---------------------------------------
Exportamos la ruta
--------------------------------------*/

module.exports = app;