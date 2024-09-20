import React, { useState } from 'react';

const FilmeForm = ({ onSubmit }) => {
  const [titulo, setTitulo] = useState('');
  const [diretor, setDiretor] = useState('');
  const [anoLancamento, setAnoLancamento] = useState('');
  const [cinemaId, setCinemaId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !diretor || !anoLancamento || !cinemaId) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    onSubmit({ titulo, diretor, anoLancamento, cinemaId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div>
        <label>Diretor:</label>
        <input
          type="text"
          value={diretor}
          onChange={(e) => setDiretor(e.target.value)}
        />
      </div>
      <div>
        <label>Ano de Lançamento:</label>
        <input
          type="number"
          value={anoLancamento}
          onChange={(e) => setAnoLancamento(e.target.value)}
        />
      </div>
      <div>
        <label>ID do Cinema:</label>
        <input
          type="text"
          value={cinemaId}
          onChange={(e) => setCinemaId(e.target.value)}
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default FilmeForm;
