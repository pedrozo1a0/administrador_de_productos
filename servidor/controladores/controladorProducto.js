const Producto= require('./../modelos/modeloProducto');



module.exports.agregarProducto= (req, res)=>{
    const nuevoProducto={
        titulo: req.body.titulo,
        precio: req.body.precio,
        descripcion: req.body.descripcion
    }
    return Producto.create(nuevoProducto)
    .then((producto)=>{
        return res.status(201).json(producto)
    })
    .catch((err)=>{
        return res.status(500).json({mensaje:"Algo salio mal"})
    })
}

module.exports.todosLosProductos= (req, res)=>{
    return Producto.find()
    .then((producto)=>{
        return res.status(200).json(producto)
    })
    .catch((err)=>{
        return res.status(500).json({mensaje:"Algo salio mal"})
    })
}