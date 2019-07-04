const mongoose = require("mongoose");

ventaSchema = new mongoose.Venta({
    cliente: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Cliente',
        required: true,
    },
    fecha: {
        type: Date,
        default: Date.now(),
    },
    productos: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Product',
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