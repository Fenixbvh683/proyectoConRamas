const {leerJSON,escribirJSON} = require('../data');
const Producto = require('./producto');

module.exports = {
    productos : leerJSON(),
    //   listar : require('./listar'),
    //   agregar:  require('./agregar'),
    //   filtrar :  require('./filtar'),
    //   editar : require('./editar'),
    //   buscar :  require('./buscar')
    };