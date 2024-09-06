import React, { useState, useEffect } from "react";
import axios from "axios";
//import "bootstrap/dist/css/bootstrap.css";

function modificarMercaderia() {
  const [idMercaderia, setIdMercaderia] = useState(""); 
  const [mercaderia, setMercaderia] = useState({
    nombreProducto: "",
    cantidad: 0,
    precio: 0.0,
    categoria: "",
    descripcion: "",
    proveedor: "",
    porcentaje: 0.0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMercaderia((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Buscar mercadería por ID
  const buscarMercaderiaPorId = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/stock/${idMercaderia}`)
      .then((response) => {
        setMercaderia(response.data);
      })
      .catch((error) => {
        console.log("Error al obtener la mercadería:", error);
      });
  };

  // Modificar mercadería existente
  const modificarMercaderia = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/stock/${idMercaderia}`, mercaderia)
      .then((response) => {
        console.log("Mercadería modificada con éxito:", response.data);
        // Aquí puedes limpiar el formulario o hacer otras acciones
      })
      .catch((error) => {
        console.log("Error al modificar la mercadería:", error);
      });
  };

  return (
    <div>
      <h2>Modificar Mercadería</h2>

      {/* Formulario para buscar mercadería por ID */}
      <form onSubmit={buscarMercaderiaPorId}>
        <div className="form-group">
          <label htmlFor="idMercaderia">ID de Mercadería:</label>
          <input
            type="text"
            className="form-control"
            id="idMercaderia"
            name="idMercaderia"
            value={idMercaderia}
            onChange={(e) => setIdMercaderia(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Buscar Mercadería
        </button>
      </form>

      <hr />

      {/* Formulario para modificar mercadería */}
      <form onSubmit={modificarMercaderia}>
        <div className="form-group">
          <label htmlFor="nombreProducto">Nombre del Producto:</label>
          <input
            type="text"
            className="form-control"
            id="nombreProducto"
            name="nombreProducto"
            value={mercaderia.nombreProducto}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cantidad">Cantidad:</label>
          <input
            type="number"
            className="form-control"
            id="cantidad"
            name="cantidad"
            value={mercaderia.cantidad}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="precio"
            name="precio"
            value={mercaderia.precio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoría:</label>
          <input
            type="text"
            className="form-control"
            id="categoria"
            name="categoria"
            value={mercaderia.categoria}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <input
            type="text"
            className="form-control"
            id="descripcion"
            name="descripcion"
            value={mercaderia.descripcion}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proveedor">Proveedor:</label>
          <input
            type="text"
            className="form-control"
            id="proveedor"
            name="proveedor"
            value={mercaderia.proveedor}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="porcentaje">Precio:</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="porcentaje"
            name="porcentaje"
            value={mercaderia.porcentaje}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Modificar Mercadería
        </button>
      </form>
    </div>
  );
}

export default modificarMercaderia;
