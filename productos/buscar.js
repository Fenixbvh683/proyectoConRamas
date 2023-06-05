const {leerJSON, escribirJSON} = require('../data');
const productos_db = leerJSON()

const buscar = function(nombre){
    const producto = productos_db.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase())
    return producto = leerJSON()
  }
  module.exports = buscar;