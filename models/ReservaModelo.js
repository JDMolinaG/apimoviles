const {model,Schema} = require('mongoose')

const Reservas = Schema({
    nombre:{
        type:String,
        required:true,
    },
    telefono:{
        type:Number,
        required:true,
    },
    correo:{
        type:String,
        required:true,
    },
    fechaInicio:{
        type:String,
        required:true,
    },
    fechaFinal:{
        type:String,
        required:true,
    },
    numeroPersonas:{
        type:String,
        required:true,
    },
    tipoServicio:{
        type:String,
        required:true,
    }
    
})

module.exports=model('Reservas',Reservas)