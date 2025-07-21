// src/components/IntegrationSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import './IntegrationSection.css';

// Dados fictícios para a agenda (substitua por dados reais da Google Agenda no futuro)
const dummyAgendaEvents = [
  {
    id: 'event1',
    title: 'Workshop de Comunicação Consciente',
    date: '2025-08-10T14:00:00', // Exemplo: 10/AGO
    description: 'Aprenda técnicas para se comunicar de forma mais eficaz e empática.',
    location: 'Online via Zoom',
    link: '#', // Link para o evento (futuramente, Google Calendar link)
  },
  {
    id: 'event2',
    title: 'Sessão de Meditação Guiada',
    date: '2025-08-15T19:30:00', // Exemplo: 15/AGO
    description: 'Relaxe e reconecte-se consigo mesmo em uma sessão de meditação profunda.',
    location: 'Estúdio Voz do Ser',
    link: '#',
  },
  {
    id: 'event3',
    title: 'Webinar: Desbloqueio Criativo',
    date: '2025-08-22T10:00:00', // Exemplo: 22/AGO
    description: 'Explore métodos para superar bloqueios e liberar seu potencial criativo.',
    location: 'Online',
    link: '#',
  },
];

const formatDateForDisplay = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const monthNames = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
  const month = monthNames[date.getMonth()];
  return { day, month };
};

function IntegrationSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="integration-section" ref={sectionRef}>
      {/* Coluna da Agenda */}
      <div className={`integration-column agenda-column ${isVisible ? 'fade-in-up' : ''}`}>
        <h2>Agenda</h2> {/* Título "Agenda" conforme a imagem */}
        <div className="agenda-events">
          {dummyAgendaEvents.map(event => {
            const { day, month } = formatDateForDisplay(event.date);
            return (
              <div key={event.id} className="agenda-card">
                <div className="date-highlight">
                  <span className="day">{day}</span>
                  <span className="month">{month}</span>
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  {/* Botão de Inscrição */}
                  <button
                    className="enroll-button"
                    onClick={() => window.open(event.link, '_blank')} // Abre o link em nova aba
                  >
                    Inscreva-se
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coluna do Instagram (permanece inalterada) */}
      <div className={`integration-column instagram-column ${isVisible ? 'fade-in-up' : ''}`}>
        <h2>Nosso Instagram</h2>
        <p>Acompanhe-nos no Instagram para mais conteúdos e atualizações!</p>
        <div className="instagram-placeholder">
          <img src="https://via.placeholder.com/300x200?text=Feed+Instagram" alt="Placeholder do Feed do Instagram" />
          <a href="https://instagram.com/seuperfil" target="_blank" rel="noopener noreferrer" className="instagram-link">
            Visitar Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntegrationSection;