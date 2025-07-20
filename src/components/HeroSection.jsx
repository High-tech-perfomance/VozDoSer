// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import heroVideo from '../assets/hero_video.mp4'; // Verifique se o caminho do seu vídeo está correto

function HeroSection() {
  const [heroElementsLoaded, setHeroElementsLoaded] = useState(false);

  useEffect(() => {
    // Simula o carregamento do vídeo e overlay após o texto principal aparecer.
    // Você pode ajustar o tempo (2000ms = 2 segundos) conforme o efeito desejado.
    const timer = setTimeout(() => {
      setHeroElementsLoaded(true);
    }, 1000); // Exibe o vídeo e overlay 2 segundos após o carregamento inicial

    return () => clearTimeout(timer); // Limpa o timer
  }, []);

  return (
    <section className="hero-section-container">
      {/* Texto "VOZ DO SER" visível por padrão, sem delay */}
      <div className="hero-content loaded"> {/* Sempre 'loaded' para o texto */}
        <h1 className="hero-title">VOZ DO SER</h1>
      </div>

      {/* Vídeo e Overlay aparecem após o delay controlado por heroElementsLoaded */}
      <video className={`hero-video ${heroElementsLoaded ? 'visible' : ''}`} autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      <div className={`hero-overlay ${heroElementsLoaded ? 'visible' : ''}`}></div>
    </section>
  );
}

export default HeroSection;