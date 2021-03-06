/*---------------------------------------
REQUERIMIENTOS
--------------------------------------*/
const express = require('express');
const app = express();


/*---------------------------------------
Importamos el controlador
--------------------------------------*/

const Slide = require('../Controllers/slide.controller');

/*---------------------------------------
Creamos las rutas HTTP
--------------------------------------*/

app.get('/mostrar-slide', Slide.mostrarSlide);

app.post('/crear-slide',  Slide.crearSlide);

app.put('/editar-slide/:id',  Slide.editarSlide);

app.delete('/eliminar-slide/:id',  Slide.eliminarSlide);

app.get('/mostrar-img/:imagen', Slide.mostrarImg);

/*---------------------------------------
Exportamos la ruta
--------------------------------------*/

module.exports = app;