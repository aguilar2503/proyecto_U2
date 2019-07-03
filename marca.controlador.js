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

module.exports.create = create;
