// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';
import DropdownCard from './DropdownCard';

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false); // NOVO: Estado para controlar a rolagem

  const handleMouseEnter = (menuName) => {
    setOpenDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // NOVO: useEffect para escutar o evento de rolagem
  useEffect(() => {
    const handleScroll = () => {
      // Define a altura a partir da qual o Header deve mudar (ex: 50px de rolagem)
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio garante que o efeito só rode uma vez ao montar e desmonte ao sair

  return (
    // Aplica a classe 'scrolled' condicionalmente
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-box">
          <span className="logo-text">VOZ DO SER</span>
        </div>
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home">HOME</a></li>

            <li
              className={`nav-item has-dropdown ${openDropdown === 'clinica' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('clinica')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#clinica">CLÍNICA <span className="dropdown-arrow">⌄</span></a>
              {openDropdown === 'clinica' && (
                <div className="dropdown-modal">
                  <DropdownCard
                    title="Terapia da Comunicaçãao"
                    description="sessão individual, de casal ou família."
                    link="#terapia-comunicacao"
                  />
                  <DropdownCard
                    title="Desenvolvimento Pessoal"
                    description="reeducação financeira, treinamento de comunicação, carreira com propósito e massagem com desbloqueio energético."
                    link="#desenvolvimento-pessoal"
                  />
                  <DropdownCard
                    title="Cuidado Artístico"
                    description="fonoterapia, aulas de canto, aulas de instrumentos e oficina de expressividade."
                    link="#cuidado-artistico"
                  />
                </div>
              )}
            </li>

            <li
              className={`nav-item has-dropdown ${openDropdown === 'escola' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('escola')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#escola">ESCOLA <span className="dropdown-arrow">⌄</span></a>
              {openDropdown === 'escola' && (
                <div className="dropdown-modal">
                  <DropdownCard title="Formação Básica" description="Detalhes da formação básica." link="#formacao-basica" />
                  <DropdownCard title="Formação Avançada" description="Cursos para aprofundamento." link="#formacao-avancada" />
                  <DropdownCard title="Eventos e Workshops" description="Participe de nossos eventos." link="#eventos" />
                </div>
              )}
            </li>

            <li
              className={`nav-item has-dropdown ${openDropdown === 'solucoes' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('solucoes')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#solucoes-empresariais">SOLUÇÕES EMPRESARIAIS <span className="dropdown-arrow">⌄</span></a>
              {openDropdown === 'solucoes' && (
                <div className="dropdown-modal">
                  <DropdownCard title="Treinamentos In-Company" description="Soluções personalizadas para sua empresa." link="#treinamentos-in-company" />
                  <DropdownCard title="Palestras e Consultoria" description="Experiências transformadoras para equipes." link="#palestras-consultoria" />
                </div>
              )}
            </li>

            <li className="nav-item"><a href="#equipe">EQUIPE</a></li>
            <li className="nav-item"><a href="#contato">CONTATO</a></li>
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