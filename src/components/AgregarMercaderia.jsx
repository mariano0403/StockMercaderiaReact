import React, { useState } from "react";
import axios from "axios";

function AgregarMercaderia() {
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

  const agregarMercaderia = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/stock/agregar", mercaderia)
      .then((response) => {
        console.log("Mercadería agregada con éxito:", response.data);
        // Limpiar el formulario o redirigir, si es necesario
        setMercaderia({
          nombreProducto: "",
          cantidad: 0,
          precio: 0.0,
          categoria: "",
          descripcion: "",
          proveedor: "",
          porcentaje: 0.0
        });
      })
      .catch((error) => {
        console.log("Error al agregar mercadería:", error);
      });
  };

  return (
    <div>
      <h2>Agregar Mercadería</h2>
      <form onSubmit={agregarMercaderia}>
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
          <label htmlFor="porcentaje">Porcentaje:</label>
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
          Añadir Mercadería
        </button>
      </form>
    </div>
  );
}

export default AgregarMercaderia;

