var mongoose = require('mongoose');
var schema = require('./cliente.model');

mongoose.connect('mongodb://localhost:27017/proyecto_U2', { useNewUrlParser: true });
var Cliente = mongoose.model('Cliente', schema, 'clientes');

Cliente.create(cliente)
    .then((data) => {
        console.log("Guardado");
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
        console.log("Errror");
    })

