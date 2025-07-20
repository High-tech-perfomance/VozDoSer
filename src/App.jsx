// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DotGrid from './components/DotGrid';

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
      {/* DotGrid com baseColor transparente */}
      <DotGrid
        baseColor="rgba(82, 39, 255, 0.1)"   /* Pontos com 10% de opacidade */
        activeColor="rgba(82, 39, 255, 0.7)" /* Pontos com 70% de opacidade ao interagir */
        dotSize={16}
        gap={32}
        proximity={150}
      />

      <HeroSection />

      {mainContentVisible && (
        <>
          <Header />
          <main>
            <section style={{ height: '100vh', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#333' }}>
              <h2>Conteúdo Abaixo (Role para ver o Header mudar!)</h2>
            </section>
             <section style={{ height: '500px', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#333' }}>
              <h2>Mais Conteúdo</h2>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;