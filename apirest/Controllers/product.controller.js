/*---------------------------------------
Importamos el modelo
--------------------------------------*/

const Product = require('../Models/product.model');

//Sirve para la administración de carpetas y archivos en NodeJS
const fs = require('fs');
const path = require('path');

/*---------------------------------------
Funcion GET
--------------------------------------*/

let mostrarProduct = (req,res)=>{

    //https://mongoosejs.com/docs/api.html#model_Model.find

    Product.find({})
    .exec((err, data)=>{
        
        if (err) {
            return res.json({
                status:500,
                mensaje:"Error en la petición"
            });
        }

        //Contar la cantidad de registros
        Product.countDocuments({}, (err, total)=>{

            if (err) {
                return res.json({
                    status:500,
                    mensaje:"Error en la petición"
                });
            }

            res.json({

                status:200,
                total,
                data

            })

        });

    });

};

/*---------------------------------------
Funcion POST
--------------------------------------*/

let crearProduct = (req,res)=>{

    //Obtenemos los datos del formulario
    let body = req.body;

    if(!req.files){

        return res.json({
            status:500,
            mensaje:"La imagen no puede ser vacio"
        });

    }

    //Obtenemos el archivo
    let archivo = req.files.image;

    //Validamos extension del archivo
    if(archivo.mimetype != 'image/jpeg' && archivo.mimetype != 'image/png'){

        return res.json({
            status:400,
            mensaje:"La imagen debe ser formato JPEG o PNG"
        });

    }

    //Validamos tamaño del archivo
    if(archivo.size > 2000000){

        return res.json({
            status:400,
            mensaje:"La imagen debe ser inferior a 2mb"
        });

    }

    //Cambiar nombre al archivo
    let nombre = Math.floor(Math.random()*10000);

    //Capturar extension del archivo
    let extension = archivo.name.split('.').pop();

    //Movemos el archivo a la carpeta
    archivo.mv(`./files/products/${nombre}.${extension}`, err =>{

        if(err){

            return res.json({
                status:500,
                mensaje:"Error al guardar la imagen"
            });
        }


        //Obtenemos los datos del formulario para pasarlos al modelo
        let product = new Product({

            image: `${nombre}.${extension}`,
            title: body.title,
            description:body.description,
            category:body.category,
            price: body.price

        });


        //Guardamos en MongoDB
        //https://mongoosejs.com/docs/api.html#model_Model-save

        product.save((err,data)=>{

            if(err){

                return res.json({
                    status:400,
                    mensaje:"Error al guardar el producto",
                    err
                });

            }

            res.json({

                status:200,
                data,
                mensaje:"El producto ha sido creado con exito"

            })
            
        })

    })
   
}
 

/*---------------------------------------
Funcion PUT
--------------------------------------*/

let editarProduct = (req,res)=>{

    //Capturamos el id del Product a actualizar
    let id = req.params.id;

    //Obtenemos el cuerpo del formulario
    let body = req.body;

    /*---------------------------------------
    Tasks
    --------------------------------------*/

    /*---------------   Validamos que la Product exista    ----------------*/

    Product.findById(id, (err,data) =>{

        if(err){
            return res.json({
                status:500,
                mensaje:"Error en el servidor"
            });
        }

        //Validamos que la Product exista

        if(!data){
            return res.json({
                status:400,
                mensaje:"La foto no existe en la Base de Datos"
            });
        }

        let rutaImagen = data.image;

        /*---------------   Validamos cambio de imagen    ----------------*/

        let validarCambioArchivo =  (req, rutaImagen)=>{

            return new Promise((resolve, reject)=>{

                if(req.files){

                    //Obtenemos el archivo
                    let archivo = req.files.image;

                    //Validamos extension del archivo
                    if(archivo.mimetype != 'image/jpeg' && archivo.mimetype != 'image/png'){

                        return res.json({
                            status:400,
                            mensaje:"La imagen debe ser formato JPEG o PNG"
                        });

                        let respuesta = {
                            res:res,
                            mensaje:"la imagen debe ser formato JPEG o PNG"
                        }
                        reject(respuesta);

                    }

                    //Validamos tamaño del archivo
                    if(archivo.size > 2000000){

                        return res.json({
                            status:400,
                            mensaje:"La imagen debe ser inferior a 2mb"
                        });

                        let respuesta = {
                            res:res,
                            mensaje:"La imagen debe ser inferior a 2mb"
                        }
                        reject(respuesta);

                    }

                    //Cambiar nombre al archivo
                    let nombre = Math.floor(Math.random()*10000);

                    //Capturar extension del archivo
                    let extension = archivo.name.split('.').pop();

                    //Movemos el archivo a la carpeta
                    archivo.mv(`./files/products/${nombre}.${extension}`, err =>{

                        if(err){

                            return res.json({
                                status:500,
                                mensaje:"Error al guardar la imagen",
                                err
                            });

                            let respuesta = {
                                res:res,
                                mensaje:"Error al guardar la imagen"
                            }
                            reject(respuesta);
                            
                        }

                        //Eliminar archivo anterior
                        if(fs.existsSync(`./files/products/${rutaImagen}`)){
                            
                            fs.unlinkSync(`./files/products/${rutaImagen}`);

                        }
                        
                        //Gerenamos valor de la nueva imagen
                        rutaImagen = `${nombre}.${extension}`;
                        
                        resolve(rutaImagen);

                    })

                }else{

                    resolve(rutaImagen);

                }

            })

        }   


        /*---------------   Actualizamos los registros    ----------------*/

        let cambiarRegistroBD =  (id, rutaImagen)=>{

            return new Promise((resolve, reject)=>{

                let datosProduct = {

                    image: rutaImagen,
                    title: body.title,
                    description: body.description,
                    category:body.category,
                    price: body.price

                }
        
                //Actualizamos en MongoDB
                //https://mongoosejs.com/docs/api.html#model_Model.findByIdAnUpdate
                Product.findByIdAndUpdate(id, datosProduct, {new:true, runValidators:true}, (err,data)=>{
        
                    if(err){

                        let respuesta = {
                            res:res,
                            err: err
                        }

                        reject(respuesta);
        
                    }
    
                    let respuesta = {
                        res:res,
                        data: data
                    }

                    resolve(respuesta);
                });

            })

        }

        /*---------------------------------------
        Sincronizar las promesas
        --------------------------------------*/

        validarCambioArchivo(req, rutaImagen).then( rutaImagen =>{
           

            cambiarRegistroBD(id, rutaImagen).then( respuesta =>{

                respuesta["res"].json({

                    status:200,
                    data: respuesta["data"],
                    mensaje: "La foto ha sido actualizado con éxito"

                })

            }).catch( respuesta => {
            
                respuesta["res"].json({
                    status:400,
                    err: respuesta["err"],
                    mensaje:"Error al editar la foto de la galería"
                });
    
            })

        }).catch ( respuesta =>{

            respuesta["res"].json({

                status:400,
                mensaje:respuesta["mensaje"]

            });

        })

    });  

}

/*---------------------------------------
Funcion DELETE
--------------------------------------*/

let eliminarProduct = (req, res) => {

    //Capturamos el id del Product a actualizar
    let id = req.params.id;

    //Obtenemos el cuerpo del formulario
    let body = req.body;

    Product.findById(id, (err,data) =>{

        if(err){
            return res.json({
                status:500,
                mensaje:"Error en el servidor"
            });
        }

        //Validamos que el Product exista

        if(!data){
            return res.json({
                status:400,
                mensaje:"El producto no existe en la Base de Datos"
            });
        }

        //Eliminar archivo anterior
        if(fs.existsSync(`./files/products/${data.image}`)){
                            
            fs.unlinkSync(`./files/products/${data.image}`);

        }

        //Eliminar registro en MongoDB
        //https://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove

        Product.findByIdAndRemove(id , (err, data) =>{

            if(err){
                return res.json({
                    status:500,
                    mensaje:"Error al eliminar el producto"
                });
            }

            res.json({

                status:200,
                mensaje:"El producto ha sido eliminado correctamente"

            })

        })

    })

}

/*---------------------------------------
Funcion GET para tener acceso de las imagenes
--------------------------------------*/

let mostrarImg = (req, res) =>{

    let imagen = req.params.imagen;

    let rutaImagen = `./files/products/${imagen}`;

    fs.exists(rutaImagen, exists =>{

        if(!exists){

            return res.json({

                status: 400,
                mensaje:"La imagen no existe"

            })

        }

        res.sendFile(path.resolve(rutaImagen));

    })

}

/*---------------------------------------
EXPORTAMOS LAS FUNCIONES DEL CONTROLADOR
--------------------------------------*/

module.exports = {
    mostrarProduct,
    crearProduct,
    editarProduct,
    eliminarProduct,
    mostrarImg
}