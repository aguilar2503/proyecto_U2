var mongoose=require('mongoose');

module.exports=new mongoose.Schema({
    codigo:String,
    pCompra:Number,
    pVenta:Number,
    marca:{ type: mongoose.Schema.Types.ObjectId, ref: 'Marca' },
    cantidad: Number,
    minimo: Number,
    maximo: Number
})