const controladorProducto= require('./../controladores/controladorProducto')

module.exports= (app)=>{
    app.post('/api/producto/agregar', controladorProducto.agregarProducto)
    app.get('/api/productos', controladorProducto.todosLosProductos)
}