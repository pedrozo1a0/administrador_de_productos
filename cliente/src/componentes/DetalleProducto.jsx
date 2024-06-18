import { useParams } from "react-router-dom"

export const DetalleProducto= ({productos})=>{

    const Parametros= useParams()
    const idProducto= Parametros.id

    const productoActual= productos.find((producto)=>producto._id=== idProducto)
    console.log(productoActual)


    return(
        <>
            <h3>{productoActual.titulo}</h3>
            <p> {productoActual.precio} $ </p>
            <p>{productoActual.descripcion} </p>
        </>
    )
}