// src/components/HeroSection.jsx
import React, { useState } from 'react';
import './HeroSection.css';
// Certifique-se de que o caminho para o seu vídeo está correto
import videoSrc from '../assets/hero_video.mp4';

function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);

  // Esta função será chamada quando o vídeo tiver dados suficientes para começar a tocar
  const handleVideoLoad = () => {
    // Usamos um pequeno timeout para a transição não ser tão abrupta
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <section className="hero-container">
      {/* Overlay de Carregamento */}
      <div className={`loading-overlay ${!isLoading ? 'hidden' : ''}`}>
        <h1>Voz do Ser</h1>
      </div>

      {/* Vídeo de Fundo */}
      <video
        src={videoSrc}
        onLoadedData={handleVideoLoad}
        autoPlay
        muted
        loop
        playsInline
        className={`hero-video ${!isLoading ? 'visible' : ''}`}
      />

      {/* Filtro azul sobre o vídeo */}
      <div className={`video-overlay ${!isLoading ? 'visible' : ''}`}></div>

    </section>
  );
}

export default HeroSection;