const mongoose = require("mongoose");

clienteSchema = new mongoose.Schema({
    rfc: {
        type: String,
        required: true,
        match: /^[A-ZÑ&]{3,4}\d{6}(?:[A-Z\d]{3})?$/
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
    },
    telefono: {
        type: String,
        required: true
    },
    domicilio: {
        type: String,
        required: true  
    }
});
module.exports = clienteSchema;