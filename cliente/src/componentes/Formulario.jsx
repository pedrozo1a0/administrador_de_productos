import { useState } from "react"

export const Formulario= ({listaProductos, setListaProductos})=>{
    const modeloProducto={
        titulo: "",
        precio: "",
        descripcion: ""
    }
    const [Producto, setProducto]= useState(modeloProducto)

    const cambiarCampo= (campo, valor)=>{
        let nuevoProducto= {...Producto, [campo]: valor}
        setProducto(nuevoProducto)
    }
    const actualizarLista=(e)=>{
        e.preventDefault()
        let nuevaLista= [...listaProductos, Producto]
        setListaProductos(nuevaLista)

    }

    return(
        <>
            <h2>Manejador de productos</h2>
            <form  onSubmit={actualizarLista}  >
                <div>
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" name="titulo"  onChange={(e)=>{cambiarCampo(e.target.name, e.target.value)}}  />
                </div>
                <div>
                    <label htmlFor="precio">Precio</label>
                    <input type="text" name="precio"   onChange={(e)=>{cambiarCampo(e.target.name, e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="descripcion">Descripcion</label>
                    <input type="text" name="descripcion"  onChange={(e)=>{cambiarCampo(e.target.name, e.target.value)}} />
                </div>
                <button>Crear</button>
            </form>
        </>
    )
}