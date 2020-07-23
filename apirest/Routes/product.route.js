/*---------------------------------------
REQUERIMIENTOS
--------------------------------------*/
const express = require('express');
const app = express();


/*---------------------------------------
Importar Middleware
--------------------------------------*/

const {verificarToken} = require('../middlewares/auth');

/*---------------------------------------
Importamos el controlador
--------------------------------------*/

const Producto = require('../Controllers/product.controller');

/*---------------------------------------
Creamos las rutas HTTP
--------------------------------------*/

app.get('/mostrar-productos', Producto.mostrarProduct);

app.post('/crear-producto', verificarToken, Producto.crearProduct);

app.put('/editar-producto/:id', verificarToken, Producto.editarProduct);

app.delete('/eliminar-producto/:id', verificarToken, Producto.eliminarProduct);

app.get('/mostrar-img-producto/:imagen', Producto.mostrarImg);

/*---------------------------------------
Exportamos la ruta
--------------------------------------*/

module.exports = app;