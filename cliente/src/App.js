import { Formulario } from './componentes/Formulario';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ListaProductos } from './componentes/ListaProductos';
import { DetalleProducto } from './componentes/DetalleProducto';



function App() {

const [listaProductos, setListaProductos]= useState([])
const [URL_BASE, setURL_BASE]= useState("http://localhost:8000")

  useEffect(()=>{
    const mostrarProductos= async ()=>{
      const URL= `${URL_BASE}/api/productos`
      const configuracion={
        method: 'GET'
      }

    const respuesta= await fetch(URL, configuracion)
    const datos=  await respuesta.json()
    setListaProductos(datos)
    }

    mostrarProductos();



  },[])
  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<div>
                                  <Formulario   listaProductos={listaProductos}  setListaProductos={setListaProductos}   />
                                  <ListaProductos   productos={listaProductos} />
                                </div>}  />
        <Route path="/detalle/producto/:id" element={<DetalleProducto  productos={listaProductos} />} />
      </Routes>
    </div>
  );
}

export default App;
