/*---------------------------------------
REQUERIMIENTOS
--------------------------------------*/
const mongoose = require('mongoose');

/*---------------------------------------
ESQUEMA PARA EL MODELO CONECTOR A MONGODB
--------------------------------------*/

let Schema = mongoose.Schema;
let productSchema = new  Schema({

    image:{
        type:String,
        required: [true, "La imagen es obligatoria"]
    },
    title:{
        type:String,
        required: [true, "El titulo es obligatoria"]
    },
    description:{
        type:String,
        required: [true, "La introduccion es obligatoria"]
    },
    category:{
        type:String,
        required: [true, "La introduccion es obligatoria"]
    },
    price:{
        type:Number,
        required: [true, "La url es obligatoria"]
    }

});

/*---------------------------------------
Exportamos el modelo
--------------------------------------*/

module.exports = mongoose.model("products", productSchema);