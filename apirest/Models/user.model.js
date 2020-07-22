/*---------------------------------------
REQUERIMIENTOS
--------------------------------------*/

const mongoose = require('mongoose');

//Requerimos el modulo para validaciones unicas
const uniqueValidator = require('mongoose-unique-validator');

/*---------------------------------------
ESQUEMA PARA EL MODELO CONECTOR A MONGODB
--------------------------------------*/

let Schema = mongoose.Schema;
let userSchema = new  Schema({

    usuario:{
        type:String,
        required: [true, "El usuario es obligatorio"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "La contraseña es obligatoria"]
    },
    email:{
        type:String,
        required: [true, "El email es obligatorio"],
        unique:true
    }
});

/*---------------------------------------
Evitar devolver en la Data el campo Password
--------------------------------------*/

userSchema.methods.toJSON = function(){

    let user = this;
    let userObject = user.toObject();

    delete userObject.password;
    
    return userObject;

}

/*---------------------------------------
Devolver mensaje personalizado para validaciones unicas
--------------------------------------*/

userSchema.plugin(uniqueValidator, {message: 'El {PATH} ya está registrado en la base de datos '})

/*---------------------------------------
Exportamos el modelo
--------------------------------------*/

module.exports = mongoose.model("users", userSchema);