import React, { useState } from 'react';

const FilmeForm = ({ onSubmit }) => {
  const [titulo, setTitulo] = useState('');
  const [diretor, setDiretor] = useState('');
  const [anoLancamento, setAnoLancamento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ titulo, diretor, anoLancamento });
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
      <button type="submit">Salvar</button>
    </form>
  );
};

export default FilmeForm;
