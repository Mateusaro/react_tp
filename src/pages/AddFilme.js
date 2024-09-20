import React from 'react';
import { createFilme } from '../api';
import FilmeForm from '../components/FilmeForm';
import { useNavigate } from 'react-router-dom';

const AddFilme = () => {
  const navigate = useNavigate();

  const handleAddFilme = async (filme) => {
    const { titulo, diretor, anoLancamento, cinemaId } = filme;
    await createFilme({ titulo, diretor, anoLancamento, cinemaId});
    navigate('/');
  };

  return (
    <div>
      <h1>Adicionar Filme</h1>
      <FilmeForm onSubmit={handleAddFilme} />
    </div>
  );
};

export default AddFilme;
