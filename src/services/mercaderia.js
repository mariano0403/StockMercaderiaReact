import axios  from "axios";

export const getMercaderia = () => {
    return axios.get('http://localhost:3000/stock/')
        .then((response)=>{
            const { data } = response;
            return data;

        })
}
export const agregarMercaderia = () => {
    return axios.post('http://localhost:3000/stock/')
        .then((response)=>{
            const { data } = response;
            return data;

        })
}

export const modificarMercaderia = () => {
    return axios.put('http://localhost:3000/stock/')
        .then((response)=>{
            const { data } = response;
            return data;

        })
}

export const eliminarMercaderia = () => {
    return axios.delete('http://localhost:3000/stock/')
        .then((response)=>{
            const { data } = response;
            return data;

        })
}