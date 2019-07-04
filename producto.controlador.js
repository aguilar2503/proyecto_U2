var brandController = require("./marca.controlador");

async function create(product, brand, Product, Brand) {
    var brand = {
        brand: brand
    };
    
    var brandCreated = await brandController.create(brand, Brand);

    product["brand"] = brandCreated._id;

    var productCreated = await Product.create(product)
        .then((data) => {
            console.log("Producto Guardado!!!");
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            // console.log(error);
            return error;
        });
    return productCreated;
}

async function findByPrice(priceToFind, Product) {

    var params = {
        price: priceToFind
    }

    var productFind = await Product.find(params)
        .populate("brand")
        .then((data) => {
            // console.log(data);
            return data;
        })
        .catch((err) => {
            console.log("Not found");
            return err;
        });

    return productFind;
}

async function update(Product){
    Product.update({_id:'5d159119804ab4119c068fea'}, {$set: {email:'ejemplo2@ittepic.com'}},
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

async function deleteProductById(Product){
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
module.exports.findByPrice = findByPrice;
module.exports.deleteProductById=deleteProductById;
module.exports.update=update;