/*---------------------------------------
REQUERIMIENTOS
--------------------------------------*/
const express = require('express');
const app = express();

/*---------------------------------------
Importamos el controlador
--------------------------------------*/

const Producto = require('../Controllers/product.controller');

/*---------------------------------------
Creamos las rutas HTTP
--------------------------------------*/

app.get('/mostrar-productos', Producto.mostrarProduct);

app.post('/crear-producto',  Producto.crearProduct);

app.put('/editar-producto/:id',  Producto.editarProduct);

app.delete('/eliminar-producto/:id',  Producto.eliminarProduct);

app.get('/mostrar-img-producto/:imagen', Producto.mostrarImg);

/*---------------------------------------
Exportamos la ruta
--------------------------------------*/

module.exports = app;