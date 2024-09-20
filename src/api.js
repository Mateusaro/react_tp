import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const createCinema = (data) => {
  return axios.post(`${API_URL}/cinemas`, data);
};

export const getFilmes = () => {
  return axios.get(`${API_URL}/filmes`);
};

export const createFilme = (filme) => {
  return axios.post(`${API_URL}/filmes`, filme);
};

export const deleteFilme = (id) => {
  return axios.delete(`${API_URL}/filmes/delete/${id}`);
};

export const getFilmeById = (id) => {
  return axios.get(`${API_URL}/filmes/${id}`);
};

export const updateFilme = (id, filme) => {
  return axios.put(`${API_URL}/filmes/${id}`, filme);
};
