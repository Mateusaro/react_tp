// src/pages/CinemaHistorico.js
import React, { useEffect, useState } from 'react';
import { getCinemas, getHistoricoByCinemaId } from '../api'; // Adicione a importação de getCinemas e getHistoricoByCinemaId
import { Link } from 'react-router-dom';

const CinemaHistorico = () => {
  const [cinemas, setCinemas] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [selectedCinemaId, setSelectedCinemaId] = useState('');

  useEffect(() => {
    const fetchCinemas = async () => {
      const response = await getCinemas();
      setCinemas(response.data);
    };
    fetchCinemas();
  }, []);

  useEffect(() => {
    const fetchHistorico = async () => {
      if (selectedCinemaId) {
        const response = await getHistoricoByCinemaId(selectedCinemaId);
        setHistorico(response.data);
      }
    };
    fetchHistorico();
  }, [selectedCinemaId]);

  return (
    <div>
      <h1>Histórico dos Cinemas</h1>
      <div>
        <label>Cinema:</label>
        <select
          value={selectedCinemaId}
          onChange={(e) => setSelectedCinemaId(e.target.value)}
        >
          <option value="">Selecione um cinema</option>
          {cinemas.map((cinema) => (
            <option key={cinema.id} value={cinema.id}>
              {cinema.nome}
            </option>
          ))}
        </select>
      </div>
      {selectedCinemaId && (
        <div>
          <h2>Histórico do Cinema</h2>
          <ul>
            {historico.map((item) => (
              <li key={item.id}>
                {item.acao} - {item.dataAlteracao}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CinemaHistorico;
