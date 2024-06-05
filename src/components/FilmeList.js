// src/components/FilmeList.js
import React from 'react';
import { Link } from 'react-router-dom';

const FilmeList = ({ filmes, onDelete }) => (
  <div>
    <h2>Lista de Filmes</h2>
    <ul>
      {filmes.map((filme) => (
        <li key={filme.id}>
          {filme.titulo} ({filme.anoLancamento}) - {filme.diretor}
          <Link to={`/edit/${filme.id}`}>Editar</Link>
          <button onClick={() => onDelete(filme.id)}>Deletar</button>
        </li>
      ))}
    </ul>
  </div>
);

export default FilmeList;
