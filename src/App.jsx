// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DotGrid from './components/DotGrid';
import VerticalCarouselSection from './components/VerticalCarouselSection';
import IntegrationSection from './components/IntegrationSection';
import Footer from './components/Footer';
import MaintenancePage from './components/MaintenancePage';

// Componente para encapsular a lógica e layout da página principal
function MainPageLayout() {
  const [mainContentVisible, setMainContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainContentVisible(true);
    }, 2500);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        {mainContentVisible && (
          <>
            <Header />
            <main>
              <VerticalCarouselSection />
              <IntegrationSection /> 
              <Footer />
            </main>
          </>
        )}
    </>
  );
}

function App() {
  return (
    <div className="App">
      {/* Os componentes de background agora ficam aqui, visíveis em todas as rotas */}
      <DotGrid
        dotSize={2}
        gap={10}
        proximity={250}
        baseColor="rgba(16, 56, 55, 0.2)"
        activeColor="rgba(0, 205, 201, 1)"
      />
      <HeroSection />

      <Routes>
        <Route path="/" element={<MainPageLayout />} />
        <Route path="/manutencao" element={<MaintenancePage />} /> /* para colocar outras rotas de links tem que colocar aqui pra chamar */
      </Routes>
    </div>
  );
}

export default App;