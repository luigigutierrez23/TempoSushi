/*---------------------------------------
REQUERIMIENTOS
--------------------------------------*/
const mongoose = require('mongoose');

/*---------------------------------------
ESQUEMA PARA EL MODELO CONECTOR A MONGODB
--------------------------------------*/

let Schema = mongoose.Schema;
let contactSchema = new  Schema({

    name:{
        type:String,
        required: [true, "La nombre es obligatoria"]
    },
    email:{
        type:String,
        required: [true, "El email es obligatoria"]
    },
    message:{
        type:String,
        required: [true, "El mensaje es obligatoria"]
    }

});

/*---------------------------------------
Exportamos el modelo
--------------------------------------*/

module.exports = mongoose.model("customers", contactSchema);