//var mongoose = require('mongoose');
//var schema = require('./cliente.model');

//mongoose.connect('mongodb://localhost:27017/proyecto_U2', { useNewUrlParser: true });
//var Cliente = mongoose.model('Cliente', schema, 'clientes');

async function create (cliente, Cliente){

    var clienteCreate = await Cliente.create(cliente)
    .then((data) => {
        console.log("Guardado");
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
        console.log("Errror");
    })
    return clienteCreate;
}
async function findByName(NameToFind, Client) {

    var params = {
        name: NameToFind
    }

    var clientFind = await Client.find(params)
        .populate("name")
        .then((data) => {
            // console.log(data);
            return data;
        })
        .catch((err) => {
            console.log("Not found");
            return err;
        });

    return clientFind;
}
async function updateCliente(Cliente){
Cliente.update({_id:'5d159119804ab4119c068fea'}, {$set: {email:'ejemplo2@ittepic.com'}},
function (error, docs){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("<----------Actualizacion---------->");
    console.log(docs);
    process.exit(0);
});
}
//Delete
async function deleteClient(Cliente){
Cliente.findByIdAndRemove({_id:'5d159119804ab4119c068fea'}, function (error,docs){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("Exito");
    process.exit(0);
});
}

module.exports.create = create; 
module.exports.findByName = findByName;
module.exports.updateCliente = updateCliente;
module.exports.deleteClient= deleteClient;

  
   

