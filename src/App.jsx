// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DotGrid from './components/DotGrid';
import VerticalCarouselSection from './components/VerticalCarouselSection';
import IntegrationSection from './components/IntegrationSection';
import Footer from './components/Footer';

function App() {
  const [mainContentVisible, setMainContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainContentVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* 1. DotGrid como background */}
      <DotGrid
        dotSize={2}     /* Pontos menores */
        gap={10}        /* Menor espaçamento entre pontos = mais pontos */
        proximity={250} /* Maior área de detecção do mouse */
        baseColor="rgba(25, 60, 58, 0.1)"
        activeColor="rgba(25, 60, 58, 1)"
      />

      <HeroSection />

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
    </div>
  );
}

export default App;