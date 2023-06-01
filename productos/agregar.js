const Producto = require("./Producto");
const {leerJSON, escribirJSON} = require("../data");
const productos_db = leerJSON()
const agregar = function(nombre, marca, precio, descuento){
    let productos = productos_db;
    let ultimmoId = productos[productos.length - 1] ? productos[productos.length]
}