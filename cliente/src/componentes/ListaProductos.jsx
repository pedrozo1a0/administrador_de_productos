import { Link } from "react-router-dom"

export const ListaProductos= ({productos})=>{
    return(
        <>
            <h2>Todos los productos:</h2>
            {productos.map((producto, index)=>{
                return(
                <li>
                    <Link key={index}  to={`/detalle/producto/${producto._id}`}  > 
                    {producto.titulo}
                    </Link>
                </li>
                
            )})}
        </>
        
    )
}