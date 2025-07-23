import React, { useState, useEffect } from 'react';
import './Header.css';
import logoClaro from '../assets/logoClaro.png'; // 1. Importe o seu logo
import DropdownCard from './DropdownCard';

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false); // Estado para controlar a rolagem

  const handleMouseEnter = (menuName) => {
    setOpenDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // useEffect para escutar o evento de rolagem
  useEffect(() => {
    const handleScroll = () => {
      // Define a altura a partir da qual o Header deve mudar (ex: 50px de rolagem)
      const offset = window.scrollY;
      if (offset > 600) { // Se a rolagem for maior que 50 pixels
        setScrolled(true); // Adiciona a classe 'scrolled'
      } else {
        setScrolled(false); // Remove a classe 'scrolled'
      }
    };

    window.addEventListener('scroll', handleScroll); // Adiciona o 'listener'

    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpa o 'listener' ao desmontar
    };
  }, []); // O array vazio garante que o efeito só rode uma vez ao montar

  return (
    // Aplica a classe 'scrolled' condicionalmente ao header-container
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-box">
          {/* 2. Substitua o texto pela imagem do logo */}
          <img src={logoClaro} alt="Voz do Ser Logo" className="logo-image" />
        </div>
        <nav className="main-nav">
          <ul className="nav-list">

            <li className="nav-item"><a href="/manutencao">HOME</a></li>
            <li
              className={`nav-item has-dropdown ${openDropdown === 'clinica' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('clinica')}
              onMouseLeave={handleMouseLeave}
            >
              
              <a href="/manutencao" className="nav-link-with-arrow">
                CLÍNICA
                <span className="arr">
                  <i className="ico-arr"></i>
                </span>
              </a>
              {openDropdown === 'clinica' && (
                <div className="dropdown-modal">
                  <DropdownCard
                    title="Terapia da Comunicação"
                    description="sessão individual, de casal ou família."
                    
                  />
                  <DropdownCard
                    title="Desenvolvimento Pessoal"
                    description="reeducação financeira, treinamento de comunicação, carreira com propósito e massagem com desbloqueio energético."
                   
                  />
                  <DropdownCard
                    title="Cuidado Artístico"
                    description="fonoterapia, aulas de canto, aulas de instrumentos e oficina de expressividade."
                    
                  />
                </div>
              )}
            </li>

            <li
              className={`nav-item has-dropdown ${openDropdown === 'escola' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('escola')}
              onMouseLeave={handleMouseLeave}
            >

              <a href="/manutencao" className="nav-link-with-arrow">
                ESCOLA
                <span className="arr">
                  <i className="ico-arr"></i>
                </span>
              </a>
              {openDropdown === 'escola' && (
                <div className="dropdown-modal">
                  <DropdownCard title="Formação Básica" description="Detalhes da formação básica." />
                  <DropdownCard title="Formação Avançada" description="Cursos para aprofundamento." />
                  <DropdownCard title="Eventos e Workshops" description="Participe de nossos eventos." />
                </div>
              )}
            </li>

            <li
              className={`nav-item has-dropdown ${openDropdown === 'solucoes' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('solucoes')}
              onMouseLeave={handleMouseLeave}
            >

              <a href="/manutencao" className="nav-link-with-arrow">
                SOLUÇÕES EMPRESARIAIS
                <span className="arr">
                  <i className="ico-arr"></i>
                </span>
              </a>
              {openDropdown === 'solucoes' && (
                <div className="dropdown-modal">
                  <DropdownCard title="Treinamentos In-Company" description="Soluções personalizadas para sua empresa." />
                  <DropdownCard title="Palestras e Consultoria" description="Experiências transformadoras para equipes."/>
                </div>
              )}
            </li>

            <li className="nav-item"><a href="/manutencao">EQUIPE</a></li>
            <li className="nav-item"><a href="/manutencao">CONTATO</a></li>
          </ul>
        </nav>
        <div className="profile-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-user"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;