import React from 'react';
import './Footer.css';
// Colocar a imagem do Rodapé aqui
// import FooterLogo from '../assets/your-footer-logo.png'; // 

function Footer() {
  return (
    <footer className="footer-section"> 

      <div className="footer-content-wrapper">
        <div className="footer-main-content">
          {/* Coluna 1: Logo e Descrição */}
          <div className="footer-column footer-about">
            <div className="footer-logo-container">
              <span className="footer-logo-text">Voz do Ser</span>
              {/* <img src={FooterLogo} alt="Voz do Ser - Logo" className="footer-logo-image" /> ADICIONAR LOGO*/}
            </div>
            <p className="footer-description">
              Até que todos expressem quem somos!
            </p>
            <div className="footer-social-links">
              {/* LINKS DAS REDES SOCIAIS COM target="_blank" e rel="noopener noreferrer" */}
              <a href="https://www.facebook.com/vozdoser/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/vozdoser/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://open.spotify.com/show/5ySixrzYEBhGUMnSESecJT?si=fcfb13b26f994fbb" target="_blank" rel="noopener noreferrer" aria-label="Spotify"><i className="fab fa-spotify"></i></a> {/* URL de exemplo, substitua pelo seu perfil do Spotify */}
              <a href="https://www.youtube.com/@vozdoser" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a> {/* URL de exemplo, substitua pelo seu canal do YouTube */}
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="footer-column footer-links">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/manutencao">Clínica</a></li>
              <li><a href="/manutencao">Escola</a></li>
              <li><a href="#">Soluções Empresariais</a></li>
              <li><a href="#">Equipe</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3: Catálogo */}
          <div className="footer-column footer-programs">
            <h3>Serviços</h3>
            <ul>
              <li><a href="#">Terapia da Comunicação</a></li>
              <li><a href="#">Carreira com Propósito</a></li>
              <li><a href="#">Consultoria Financeira</a></li>
              <li><a href="#">Desbloqueio Energético</a></li>
              <li><a href="#">Fonoterapia</a></li>
              <li><a href="#">Aula de Música e Canto</a></li>
              <li><a href="#">Treinamento de Expressividade e Performance</a></li>
              <li><a href="#">Aula de Inglês</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="footer-column footer-contact">
            <h3>Entre em contato</h3>
            <p className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Av. Afrânio Peixoto, 250 - Butantã, São Paulo - SP, 05507-000</span>
            </p>
            <p className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <span>(11) 97677-7930</span>
            </p>
            <p className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>falecomvozdoser@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="footer-bottom">
          <p className="footer-copyright">© {new Date().getFullYear()} Voz do Ser. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;