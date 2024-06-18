const express= require('express')
const app= express()
require('./config/baseDatos')
const RutasProductos= require('./rutas/rutaProducto')
const cors= require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.listen(8000, ()=>{console.log("encendido en el puerto 8000")})
RutasProductos(app)

