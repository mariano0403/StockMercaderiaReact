import React, { useState } from "react";
import { agregarMercaderia } from "../services/mercaderia";

function AgregarMercaderia() {
  const [formData, setFormData] = useState({
    nombreProducto: "",
    cantidad: "",
    precio: "",
    categoria: "",
    descripcion: "",
    proveedor: "",
    porcentaje: "",
  });

  const [precioTotal, setPrecioTotal] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaMercaderia = { ...formData, precioTotal };
    agregarMercaderia(nuevaMercaderia)
      .then(() => {
        alert("Producto agregado con éxito");
        setFormData({
          nombreProducto: "",
          cantidad: "",
          precio: "",
          categoria: "",
          descripcion: "",
          proveedor: "",
          porcentaje: "",
        });
        setPrecioTotal(0);
      })
      .catch((error) => {
        console.log("Error al agregar el producto:", error);
      });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Agregar Mercaderia</h1>
      <form onSubmit={handleSubmit}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="nombreProducto"
                  placeholder="Nombre Producto"
                  value={formData.nombreProducto}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  name="cantidad"
                  placeholder="Cantidad"
                  value={formData.cantidad}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  name="precio"
                  placeholder="Precio"
                  value={formData.precio}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  name="porcentaje"
                  placeholder="Porcentaje"
                  value={formData.porcentaje}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="categoria"
                  placeholder="Categoría"
                  value={formData.categoria}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="descripcion"
                  placeholder="Descripción"
                  value={formData.descripcion}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="proveedor"
                  placeholder="Proveedor"
                  value={formData.proveedor}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button type="submit">Agregar Producto</button>
        </div>
      </form>
    </div>
  );
}

export default AgregarMercaderia;

