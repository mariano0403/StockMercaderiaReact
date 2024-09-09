/*import React, { useEffect, useState } from "react";
import { getMercaderia } from "../services/mercaderia";

function ListadoMercaderia() {
  const [mercaderia, setMercaderia] = useState([]);
  /*const [loading,setLoading] = useState(true);
  const [error, setError] = useState(null);
  */
  //useEffect(() => {
  //  obtenerMercaderia();
  //}, []);
  
  //const obtenerMercaderia = () =>{
  //  getMercaderia()
  //    .then((data) => {
  //      setMercaderia(data);
 //     })
  //    .catch((error) => {
  //      console.log("Error al obtener los productos:", error);
  //    });
  //};
/*
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
*/
  /*return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Listado de Mercaderia</h1>
      
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Proveedor</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          {mercaderia.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.nombreProducto}</td>
              <td>{m.cantidad}</td>
              <td>{m.precio.toFixed(2)} $</td> 
              <td>{m.categoria}</td>
              <td>{m.descripcion}</td>
              <td>{m.proveedor}</td>
              <td>${m.precioTotal}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListadoMercaderia;*/


import React, { useEffect, useState } from "react";
import { getMercaderia, eliminarMercaderia } from "../services/mercaderia";
import ModificarMercaderia from "./ModificarMercaderia";

function ListadoMercaderia() {
  const [mercaderia, setMercaderia] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    obtenerMercaderia();
  }, []);

  const obtenerMercaderia = () => {
    getMercaderia()
      .then((data) => {
        setMercaderia(data);
      })
      .catch((error) => {
        console.log("Error al obtener los productos:", error);
      });
  };

  const eliminarProducto = (id) => {
    eliminarMercaderia(id)
      .then(() => {
        obtenerMercaderia(); // Refrescar la lista
      })
      .catch((error) => {
        console.log("Error al eliminar el producto:", error);
      });
  };

  const modificarProducto = (producto) => {
    setProductoSeleccionado(producto); // Setea el producto a modificar
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Listado de Mercadería</h1>
      
      {productoSeleccionado && (
        <ModificarMercaderia 
          productoInicial={productoSeleccionado} 
          onUpdate={obtenerMercaderia} 
        />
      )}

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Proveedor</th>
            <th>Precio Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mercaderia.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.nombreProducto}</td>
              <td>{m.cantidad}</td>
              <td>{m.precio.toFixed(2)} $</td> 
              <td>{m.categoria}</td>
              <td>{m.descripcion}</td>
              <td>{m.proveedor}</td>
              <td>${m.precioTotal}</td>
              <td>
                <button onClick={() => modificarProducto(m)}>Modificar</button>
                <button onClick={() => eliminarProducto(m.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListadoMercaderia;
