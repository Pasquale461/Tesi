// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Assicurati di importare anche Routes


import Home from './components/Home';
import Ctfs from './components/Ctfs';
import { StyledEngineProvider } from '@mui/material';

function App() {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <Routes> {/* Utilizza <Routes> come contenitore principale */}
          <Route path="/" element={<Home />} /> {/* Usa l'element prop per specificare il componente */}
          <Route path="Ctfs" element={<Ctfs />} />

        </Routes>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;