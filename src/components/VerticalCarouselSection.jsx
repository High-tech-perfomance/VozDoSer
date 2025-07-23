// src/components/VerticalCarouselSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import './VerticalCarouselSection.css';

// Dados dos slides (adapte com o seu conteúdo real)
const slidesData = [
  {
    id: 'clinica_slide', // IDs específicos
    title: 'Clínica',
    content: [
      'Terapia da Comunicação (sessão individual, de casal ou família).',
      'Desenvolvimento pessoal: consultoria financeira, carreira com propósito, aulas de inglês e desbloqueio energético.',
      'Cuidado artístico: fonoterapia, canto, instrumentos e oficinas de expressividade.'
    ],
    link: '/nossa-clinica',
    linkText: 'Saiba mais sobre a Clínica'
  },
  {
    id: 'escola_slide', // IDs específicos
    title: 'Escola',
    content: [
      'Workshop Voz do Ser (comunicação, relacionamento e autoconhecimento na prática).',
      'Formação de Terapeutas da Comunicação (Metodologia Comunicação com Propósito).',
      'Ser em Cena (curso livre de teatro com autoconhecimento).',
      'Treinamento de expressividade e performance.'
    ],
    link: '/nossa-escola',
    linkText: 'Conheça nossa Escola'
  },
  {
    id: 'solucoes_slide', // IDs específicos
    title: 'Soluções empresariais e educacionais',
    content: [
      'Desenvolvimento de soft skills, cultura organizacional e ambientes emocionalmente seguros.',
      'Treinamentos de equipe e capacitação de lideranças e educadores.',
      'Palestras, workshops, conversas guiadas e terapia da comunicação para empresas e escolas.'
    ],
    link: '/solucoes-empresariais',
    linkText: 'Descubra nossas Soluções'
  },
];

function VerticalCarouselSection() {
  const sectionRef = useRef(null);
  const slidesContainerRef = useRef(null);
  const slideRefs = useRef({}); // Objeto para armazenar referências de cada slide pelo ID
  const [activeSlideId, setActiveSlideId] = useState(slidesData[0].id);
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar para o slide específico
  const scrollToSlide = (id) => {
    const targetSlide = slideRefs.current[id];
    const slidesContainer = slidesContainerRef.current;

    if (targetSlide && slidesContainer) {
      // Calcula a posição do topo do slide em relação ao topo do contêiner de rolagem
      // Isso é mais preciso do que apenas targetSlide.offsetTop
      const scrollTarget = targetSlide.offsetTop - slidesContainer.offsetTop;

      slidesContainer.scrollTo({
        top: scrollTarget,
        behavior: 'smooth',
      });
      // Atualiza o slide ativo imediatamente ao clicar, para feedback visual
      setActiveSlideId(id);
    }
  };

  useEffect(() => {
    // Observer para detecção do slide ativo
    const observerOptions = {
      root: slidesContainerRef.current, // O contêiner de slides é o viewport para a observação
      rootMargin: '-50% 0px -50% 0px', // Ajustado para centralizar a detecção, ideal para scroll-snap
      threshold: 0, // Mesmo um pequeno pedaço do slide no centro já o ativa
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Se o slide estiver intersecting (e o rootMargin centraliza a detecção), defina-o como ativo
          setActiveSlideId(entry.target.id);
        }
      });
    }, observerOptions);

    // Observa cada slide
    slidesData.forEach(slide => {
      const slideElement = slideRefs.current[slide.id];
      if (slideElement) {
        observer.observe(slideElement);
      }
    });

    // Limpeza do observer
    return () => {
      observer.disconnect();
    };
  }, []); // Dependência vazia para rodar apenas uma vez na montagem

  useEffect(() => {
    // Observer para a animação de entrada da seção (mantido como estava)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
    <section className={`vertical-carousel-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="content-container">
        <h1>O que é o Voz do Ser</h1>
        <p>
          O Voz do Ser é um Instituto de Comunicação com Propósito, Autoconhecimento e Expansão Consciencial.
        </p>
        <p>Com metodologia exclusiva, atua em 3 principais frentes:</p>
        <ul className="slide-navigation">
          {slidesData.map((slide) => (
            <li key={slide.id}>
              <a
                href={`#${slide.id}`}
                className={activeSlideId === slide.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault(); // Previne o comportamento padrão do link
                  scrollToSlide(slide.id); // Rola para o slide correto
                }}
              >
                {slide.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="slides" ref={slidesContainerRef}>
        {slidesData.map((slide) => (
          <div
            key={slide.id}
            id={slide.id} // É crucial que o ID no HTML corresponda ao ID em slidesData
            className="slide"
            ref={(el) => (slideRefs.current[slide.id] = el)} // Armazena a referência do elemento
          >
            <div className="inner-content">
              <h1>{slide.title}</h1>
              <ul>
                {slide.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {slide.link && slide.linkText && (
                <a href={slide.link} className="slide-button">
                  {slide.linkText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VerticalCarouselSection;