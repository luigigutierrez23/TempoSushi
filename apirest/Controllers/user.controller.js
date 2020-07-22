/*---------------------------------------
Importamos el modelo
--------------------------------------*/
const User = require('../Models/user.model');

/*---------------------------------------
Requerimos modulo para encriptar password
--------------------------------------*/

const bcrypt = require('bcrypt');

//Crear Token de seguridad
const jwt = require('jsonwebtoken');

/*---------------------------------------
Funcion GET
--------------------------------------*/

let mostrarUsuarios = (req, res) => {

    //https://mongoosejs.com/docs/api.html#model_Model.find

    User.find({})
    .exec((err, data)=>{
        
        if (err) {
            return res.json({
                status:500,
                mensaje:"Error en la petición"
            });
        }

        //Contar la cantidad de registros
        User.countDocuments({}, (err, total)=>{

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


}

/*---------------------------------------
Funcion POST
--------------------------------------*/

let crearUsuario = (req, res) =>{

    //Obtenemos el cuerpo del formulario
    let body = req.body;


    //Obtenemos los datos del formulario para pasarlos al modelo
    let user = new User({

        usuario: body.usuario,
        password: bcrypt.hashSync(body.password,10),
        email: body.email

    });

    //Guardamos en MongoDB
    //https://mongoosejs.com/docs/api.html#model_Model-save

    user.save((err,data)=>{

        if(err){

            return res.json({
                status:400,
                mensaje: err.message,
                err
            });

        }

        res.json({

            status:200,
            data,
            mensaje:"El usuario ha sido creado con exito"

        })
        
    })
}

/*---------------------------------------
Funcion LOGIN
--------------------------------------*/

let loginUsuario = (req, res) =>{

    //Obtenemos el cuerpo del formulario 
    let body = req.body;

    //Recorremos la BD en busqueda de coincidencia con el usuario
    User.findOne({usuario:body.user}, (err,data)=>{
        if(err){
            return res.json({
                status:500,
                mensaje:"Error en el servidor"
            });
        }

         //Validamos que el Usuario exista
         if(!data){
            return res.json({
                status:400,
                mensaje:"El usuario es incorrecto"
            });
        }

        if(!bcrypt.compareSync(body.password, data.password)){

            return res.json({
                status:500,
                mensaje:"La contraseña es incorrecta"
            });

        }

        res.json({

            status:200,
            mensaje:"ok"

        })

    })

}

/*---------------------------------------
EXPORTAMOS LAS FUNCIONES DEL CONTROLADOR
--------------------------------------*/

module.exports = {

    mostrarUsuarios,
    crearUsuario,
    loginUsuario

}