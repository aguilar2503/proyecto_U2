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



async function createVentaAndCliente() {
    var venta = {
        fecha: Date.now(),
        subtotal: 100, 
        iva: 0.16*subtotal,
        total: iva+subtotal
    };
    const cliente = "Roberto";

    var ventaCreated = await ventaController.create(cliente, productos, Cliente, Productos);
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


