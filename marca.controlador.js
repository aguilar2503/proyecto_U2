async function create(brand, Brand) {
    var brandCreated = await Brand.create(brand)
        .then((data) => {
            console.log("Marca Guardada!!!");
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            return error;
        });
    return brandCreated;
}

async function findBrandById(idBrand,Brand){
    var params={
        _id:idBrand
    }

    var brandFind = await Brand.find(params)
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log("Not found");
            return err;
        });
    return productFind;
}

async function deleteBrandById(idBrand,Brand){
    var params={
        _id:idBrand
    }

    Brand.findOneAndRemove(params)
        .then((data)=>{
            console.log("Eliminación exitosa")
        })
        ,cathc((err)=>{
            console.log("Error!")
        });
}


async function updateByBrandId(idBrand,brand,Brand){
    var params={
        _id:idBrand
    }

    Brand.update(params,brand,function(err,raw){
        if (err) {
            console.log("Error")
            return;
        }
        console.log("Actualización exitosa")
    });

}

module.exports.create = create;
module.exports.findBrandById=findBrandById;
module.exports.deleteBrandById=deleteBrandById;
module.exports.updateByBrandId=updateByBrandId;

