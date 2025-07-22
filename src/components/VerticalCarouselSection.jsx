// src/components/VerticalCarouselSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import './VerticalCarouselSection.css';

// Dados dos slides (adapte com o seu conteúdo real)
const slidesData = [
  { 
    id: 'slide_1', 
    title: 'Clínica', 
    content: [
      'Terapia da Comunicação (sessão individual, de casal ou família).',
      'Desenvolvimento pessoal: consultoria financeira, carreira com propósito, aulas de inglês e desbloqueio energético.',
      'Cuidado artístico: fonoterapia, canto, instrumentos e oficinas de expressividade.'
    ]
  },
  { 
    id: 'slide_2', 
    title: 'Escola', 
    content: [
      'Workshop Voz do Ser (comunicação, relacionamento e autoconhecimento na prática).',
      'Formação de Terapeutas da Comunicação (Metodologia Comunicação com Propósito).',
      'Ser em Cena (curso livre de teatro com autoconhecimento).',
      'Treinamento de expressividade e performance.'
    ]
  },
  { 
    id: 'slide_3', 
    title: 'Soluções empresariais e educacionais', 
    content: [
      'Desenvolvimento de soft skills, cultura organizacional e ambientes emocionalmente seguros.',
      'Treinamentos de equipe e capacitação de lideranças e educadores.',
      'Palestras, workshops, conversas guiadas e terapia da comunicação para empresas e escolas.'
    ]
  },
];

function VerticalCarouselSection() {
  const sectionRef = useRef(null); // Ref para a seção inteira para a animação de entrada
  const slidesContainerRef = useRef(null); // Ref para o div.slides (o contêiner rolável)
  const slideRefs = useRef({}); // Refs para cada slide individual
  const [activeSlideId, setActiveSlideId] = useState(slidesData[0].id); // Estado para o slide ativo
  const [isVisible, setIsVisible] = useState(false); // Estado para a animação de fade-in

  // Função para rolar para um slide específico
  const scrollToSlide = (id) => {
    const targetSlide = slideRefs.current[id];
    if (targetSlide) {
      // Ajusta a rolagem para que o slide fique no topo do contêiner rolável
      // O behavior: 'smooth' faz a rolagem suave
      slidesContainerRef.current.scrollTo({
        top: targetSlide.offsetTop,
        behavior: 'smooth',
      });
      setActiveSlideId(id); // Atualiza o estado ativo imediatamente ao clicar
    }
  };

  // useEffect para configurar o IntersectionObserver para o Scrollspy
  useEffect(() => {
    const observerOptions = {
      root: slidesContainerRef.current, // O contêiner de slides é o elemento raiz para a observação
      // Define a "linha de ativação" um pouco acima do centro (40% do topo).
      // Isso garante que apenas um slide seja considerado "intersecting" por vez,
      // resolvendo o problema de pular itens ao rolar para cima.
      rootMargin: '-40% 0px -60% 0px',
      threshold: 0, // Dispara assim que o slide toca a linha de ativação.
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Se o slide estiver visível e no terço superior/metade da área de rolagem
          // Esta lógica pode precisar de ajuste fino dependendo do layout exato
          // e da altura dos seus slides. O rootMargin ajuda bastante.
          setActiveSlideId(entry.target.id);
        }
      });
    }, observerOptions);

    // Observar cada slide
    slidesData.forEach(slide => {
      const slideElement = slideRefs.current[slide.id];
      if (slideElement) {
        observer.observe(slideElement);
      }
    });

    // Limpeza: desconectar o observer quando o componente desmontar
    return () => {
      observer.disconnect();
    };
  }, []);

  // useEffect para a animação de fade-in da seção
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Para de observar após a primeira vez
          }
        });
      },
      { threshold: 0.1 } // Aciona quando 10% do elemento está visível
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
                  e.preventDefault(); // Evita o comportamento padrão do link
                  scrollToSlide(slide.id);
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
            id={slide.id} // ID para referência e navegação
            className="slide"
            ref={(el) => (slideRefs.current[slide.id] = el)} // Armazena a ref do slide
          >
            <div className="inner-content">
              <h1>{slide.title}</h1>
              <ul>
                {slide.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VerticalCarouselSection;