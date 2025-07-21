// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa os estilos globais
import App from './App'; // Importa o componente App principal

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente App */}
  </React.StrictMode>
);