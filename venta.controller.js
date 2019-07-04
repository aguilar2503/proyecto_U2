async function create (venta, Venta){

    var ventaCreate = await Venta.create(venta)
    .then((data) => {
        console.log("Guardada");
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
        console.log("Errror");
    })
    return ventaCreate;
}
async function findByName(NameToFind, Client) {

    var params = {
        name: NameToFind
    }

    var ventaFind = await Venta.find(params)
        .populate("name")
        .then((data) => {
            // console.log(data);
            return data;
        })
        .catch((err) => {
            console.log("Not found");
            return err;
        });

    return ventaFind;
}
Venta.update({_id:'5d159119804ab4119c068fea'}, {$set: {subtotal:200}},
function (error, docs){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("<----------Actualizacion---------->");
    console.log(docs);
    process.exit(0);
});
//Delete
Venta.findByIdAndRemove({_id:'5d159119804ab4119c068fea'}, function (error,docs){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("Exito");
    process.exit(0);
});


module.exports.create = create; 
module.exports.findByName= findByName;
module.exports.update = this.update;
module.exports.findByIdAndRemove = this.findByIdAndRemove;
