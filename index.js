const clienteController = require("./cliente.controller");
const ventaController = require("./venta.controller");
const productController = require("./producto.controlador");
const brandController = require("./marca.controlador");
var mongoose = require("mongoose");
var brandSchema = require("./marca.modelo");
var productSchema = require("./producto.modelo");
var clienteSchema = require("./cliente.model");
var ventaSchema = require("./venta.model");

mongoose.connect('mongodb://localhost:27017/proyecto_U2', { useNewUrlParser: true });

var Cliente = mongoose.model('Cliente', clienteSchema, 'clientes');
var Venta = mongoose.model('Venta', ventaSchema, 'ventas');
var Brand = mongoose.model('Brand', brandSchema, 'brands');
var Product = mongoose.model('Product', productSchema, 'products');

async function createCliente(){
    var cliente = {
        rfc: "AUMR970325E97",
        name: "roberto",
        email: "roanaguilarma@ittepic.edu.mx",
        telefono:"3271052472",
        domicilio: "G. Elias #133 Fraccionamiento amado nervo"
    }
    var clienteCreated = await clienteController.create(cliente, Cliente);
    console.log("------- cliente Creado --------");
    console.log(clienteCreated);
}
/*async function createBrand(){
    var brand = {
        marca = "adidas"
    }
    var brandCreated = await brandController.create(brand, Brand);
    console.log("------- cliente Creado --------");
    console.log(brandCreated);
}*/



async function createVentaAndCliente() {
    var venta = {
        fecha: Date.now(),
        subtotal: 100, 
        iva: 0.16*100,
        total: 16+100
    };
    const cliente = "Roberto";

    var ventaCreated = await ventaController.create(cliente, productos, venta, Cliente, Productos, Venta);
    console.log("------- Venta Creada --------");
    console.log(ventaCreated);
}
async function findVenta(cliente) {
    var ventaCliente = await ventaController.findByCliente(cliente, Product)
    console.log("------- Venta Encontrada --------");

    console.log(ventaCliente);
}

async function createBrandAndProduct() {
    var product = {
        name: "MacBook Air",
        price: 100,
        cost: 50
    };
    
    const brand = "Apple";
    
    var productCreated = await productController.create(product, brand, Product, Brand);
    console.log("------- Producto Creado --------");
    console.log(productCreated);
}

async function findProduct(price) {
    var productPrice = await productController.findByPrice(price, Product)
    console.log("------- Productos Encontrado --------");

    console.log(productPrice);
}
 
createBrandAndProduct();
findProduct(100);
findVenta("Roberto");
createVentaAndCliente();
createCliente();
//createBrand();



