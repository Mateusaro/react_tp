// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddFilme from './pages/AddFilme';
import EditFilme from './pages/EditFilme';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddFilme />} />
          <Route path="/edit/:id" element={<EditFilme />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
