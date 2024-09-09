import axios  from "axios";

/*export const getMercaderia = () => {
    return axios.get('http://localhost:3000/stock/')
        .then((response)=>{
            const { data } = response;
            return data;

        })
}
export const agregarMercaderia = (mercaderia) => {
    return axios.post('http://localhost:3000/stock/agregar', mercaderia)
        .then((response)=>{
            const { data } = response;
            return data;

        })
}
*/
/*export const modificarMercaderia = async (id, mercaderia) => {
    try {
      const response = await axios.put(`http://localhost:3000/stock/${id}`, mercaderia);
      //const {id} = req.params;
      return response.data;
    } catch (error) {
      throw error;
    }
  };*/
/*export const eliminarMercaderia = () => {
    return axios.delete('http://localhost:3000/stock/:id}')
        .then((response)=>{
            const { data } = response;
            return data;

        })
}
*/
// Función para obtener mercadería por ID



// Modificar mercadería por ID
/*export const modificarMercaderia = async (id, datosActualizados) => {
  try {
    const response = await axios.put(`http://localhost:3000/stock/${id}`, datosActualizados);
    return response.data;
  } catch (error) {
    throw error;
  }
};*/

// Eliminar mercadería por ID
/*export const eliminarMercaderia = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/stock/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};*/

// Base URL for API requests
const API_BASE_URL = 'http://localhost:3000/stock';

// Fetch all inventory items
export const getMercaderia = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching mercadería:", error);
    throw error; // Propagate error to be handled by the calling component
  }
};

// Add new inventory item
export const agregarMercaderia = async (mercaderia) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/agregar`, mercaderia);
    return response.data;
  } catch (error) {
    console.error("Error adding mercadería:", error);
    throw error;
  }
};

// Modify inventory item by ID
export const modificarMercaderia = async (id, datosActualizados) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, datosActualizados);
    return response.data;
  } catch (error) {
    console.error(`Error modifying mercadería with ID ${id}:`, error);
    throw error;
  }
};

// Delete inventory item by ID
export const eliminarMercaderia = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting mercadería with ID ${id}:`, error);
    throw error;
  }
};
