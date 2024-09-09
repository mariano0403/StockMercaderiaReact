import React, { useState, useEffect } from "react";
import { modificarMercaderia } from "../services/mercaderia";

function ModificarMercaderia({ productoInicial, onUpdate }) {
  const [formData, setFormData] = useState(productoInicial);
  const [error, setError] = useState(null);

  // Asegúrate de que productoInicial esté definido antes de renderizar el componente
  useEffect(() => {
    if (productoInicial) {
      setFormData(productoInicial);
    }
  }, [productoInicial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    modificarMercaderia(formData.id, formData)
      .then(() => {
        alert("Producto modificado con éxito");
        if (onUpdate) onUpdate(); // Actualiza la lista de productos
      })
      .catch((error) => {
        setError("Error al modificar el producto. Por favor, intente de nuevo.");
        console.log("Error al modificar el producto:", error);
      });
  };

  // Mostrar un loader o mensaje si formData no está definido aún
  if (!formData) {
    return <div>Cargando datos del producto...</div>;
  }

  return (
    <div>
      <h2>Modificar Mercadería</h2>
      <form onSubmit={handleSubmit}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <label htmlFor="id">ID</label>
                <input
                  id="id"
                  type="number"
                  name="id"
                  placeholder="ID"
                  value={formData.id}
                  onChange={handleChange}
                  required
                  readOnly
                />
                <label htmlFor="nombreProducto">Nombre Producto</label>
                <input
                  id="nombreProducto"
                  type="text"
                  name="nombreProducto"
                  placeholder="Nombre Producto"
                  value={formData.nombreProducto}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                <label htmlFor="cantidad">Cantidad</label>
                <input
                  id="cantidad"
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
                <label htmlFor="precio">Precio</label>
                <input
                  id="precio"
                  type="number"
                  name="precio"
                  placeholder="Precio"
                  value={formData.precio}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                <label htmlFor="porcentaje">Porcentaje</label>
                <input
                  id="porcentaje"
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
                <label htmlFor="categoria">Categoría</label>
                <input
                  id="categoria"
                  type="text"
                  name="categoria"
                  placeholder="Categoría"
                  value={formData.categoria}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                <label htmlFor="descripcion">Descripción</label>
                <input
                  id="descripcion"
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
                <label htmlFor="proveedor">Proveedor</label>
                <input
                  id="proveedor"
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
        {error && <div style={{ color: "red", marginTop: "1rem" }}>{error}</div>}
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button type="submit">Actualizar Producto</button>
        </div>
      </form>
    </div>
  );
}

export default ModificarMercaderia;

