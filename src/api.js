import axios from 'axios';

const API_URL = 'http://localhost:8080/filmes';

export const getFilmes = async () => {
    return await axios.get(API_URL);
};

export const deleteFilme = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};

export const createFilme = async (filme) => {
    return await axios.post(API_URL, filme);
};

export const updateFilme = async (id, filme) => {
    return await axios.put(`${API_URL}/${id}`, filme);
};
