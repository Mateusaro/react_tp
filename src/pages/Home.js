import React, { useEffect, useState } from 'react';
import { getFilmes, deleteFilme} from '../api';
import FilmeList from '../components/FilmeList';
import { Link } from 'react-router-dom';

const Home = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetchFilmes();
  }, []);

  const fetchFilmes = async () => {
    const response = await getFilmes();
    setFilmes(response.data);
  };

  const handleDelete = async (id) => {
    await deleteFilme(id);
    fetchFilmes();
  };



  return (
    <div>
      <h1>Filmes</h1>
      <Link to="/add">Adicionar Filme</Link>
      <Link to="/add-cinema">Adicionar Cinema</Link> {/* Adiciona o link para criar cinema */}
      <FilmeList filmes={filmes} onDelete={handleDelete} />  
      
    </div>
  );
};

export default Home;
