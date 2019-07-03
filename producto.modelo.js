var mongoose=require('mongoose');

module.exports=new mongoose.Schema({  
    codigo:{
        type:String,
        required:true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    marca: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Brand'
    },
    cantidad: Number,
    minimo: Number,
    maximo: Number
})