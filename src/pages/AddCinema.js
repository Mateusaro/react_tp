import React, { useState } from 'react';
import { createCinema } from '../api';
import { useNavigate } from 'react-router-dom';

const AddCinema = () => {
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCinema({ nome, cep });
      navigate('/');
    } catch (error) {
      console.error('Error creating cinema:', error);
    }
  };

  return (
    <div>
      <h1>Adicionar Cinema</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AddCinema;
