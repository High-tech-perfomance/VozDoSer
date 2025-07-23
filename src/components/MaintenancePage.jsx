// src/components/MaintenancePage.jsx
import React from 'react';
import './MaintenancePage.css'; // Importa o arquivo CSS para estilização

function MaintenancePage() {
  return (
    <div className="maintenance-container">
      <h1 className="maintenance-title">Em Manutenção</h1>
      <p className="maintenance-message">
        Estamos trabalhando para melhorar nosso site. Volte em breve!
      </p>
      {/* Você pode adicionar um ícone ou imagem aqui, se quiser */}
      {/* <i className="fas fa-tools maintenance-icon"></i> */}
    </div>
  );
}

export default MaintenancePage;