// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DotGrid from './components/DotGrid';
import VerticalCarouselSection from './components/VerticalCarouselSection';
import IntegrationSection from './components/IntegrationSection';

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
        baseColor="rgba(82, 39, 255, 0.1)"
        activeColor="rgba(82, 39, 255, 0.7)"
      />

      <HeroSection />

      {mainContentVisible && (
        <>
          <Header />
          <main>

            <VerticalCarouselSection />

            <IntegrationSection /> 
            
            <section style={{ height: '70vh', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#333', fontSize: '2em', textAlign: 'center' }}>
              <div style={{ maxWidth: '1200px', width: '100%', padding: '0 20px' }}>
                <h2></h2>
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;