const mongoose = require("mongoose");

ventaSchema = new mongoose.Venta({
    cliente: {
        id_cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'cliente.model' },
        required: true,
    },
    fecha: {
        type: Date,
        default: Date.now(),
    },
    productos: [{
        id_prod: { type: mongoose.Schema.Types.ObjectId, ref: 'productos.model' },
        cantidad: Number
    }],
    subtotal: {
        type: Number,
        required: true
    },
    iva: {
        type: Number,
        required: true  
    },
    total: {
        type: Number,
        required: true
    }
});
module.exports = ventaSchema;