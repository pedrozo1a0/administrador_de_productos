const mongoose= require('mongoose')

const Coleccion= mongoose.Schema({
    titulo: {
        type: String
    },
    precio: {
        type: Number
    },
    descripcion: {
        type: String
    }
});

const Producto= mongoose.model('productos', Coleccion)
module.exports= Producto;