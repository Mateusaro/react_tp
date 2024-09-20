import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddFilme from './pages/AddFilme';
import EditFilme from './pages/EditFilme';
import AddCinema from './pages/AddCinema'; // Importar o novo componente

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddFilme />} />
          <Route path="/edit/:id" element={<EditFilme />} />
          <Route path="/add-cinema" element={<AddCinema />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
