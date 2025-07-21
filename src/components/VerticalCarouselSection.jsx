// src/components/VerticalCarouselSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import './VerticalCarouselSection.css'; // Vamos criar este CSS

// Dados dos slides (adapte com o seu conteúdo real)
const slidesData = [
  { id: 'slide_1', title: 'Slide 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci massa, dictum a faucibus vitae, efficitur non quam. Nullam molestie lorem non lacus condimentum convallis. Nulla at augue at elit vulputate eleifend eget nec neque. In quis egestas dui. Aenean vitae pulvinar tellus. Proin at quam ac nisi suscipit consectetur. Maecenas interdum id augue sit amet auctor. Maecenas sed scelerisque arcu, et semper enim. In scelerisque convallis nisi. Nunc ut enim vitae nulla volutpat convallis.' },
  { id: 'slide_2', title: 'Slide 2', content: 'Cras tristique pretium tortor, a venenatis metus. Fusce a tellus non nulla pharetra efficitur. Mauris ut tortor lectus. Aliquam pulvinar est id mauris tincidunt, a dapibus nulla tincidunt. Vivamus vitae felis vel nisl consectetur tristique. Curabitur vel purus vel felis pharetra fermentum. Etiam vitae tellus eu ex convallis scelerisque.' },
  { id: 'slide_3', title: 'Slide 3', content: 'Duis auctor ex quis orci blandit, eu elementum magna viverra. Sed id arcu at justo blandit convallis in a elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec non turpis a urna suscipit semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
  { id: 'slide_4', title: 'Slide 4', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam eu sapien quis magna commodo vulputate. Proin in lorem quis lorem tincidunt facilisis. Sed euismod, quam vel aliquam ultrices, odio nisi elementum libero, non tincidunt massa ex eu velit.' },
  { id: 'slide_5', title: 'Slide 5', content: 'Este é um slide extra para garantir que haja rolagem suficiente e que o scrollspy funcione bem.' },
];

function VerticalCarouselSection() {
  const slidesContainerRef = useRef(null); // Ref para o div.slides (o contêiner rolável)
  const slideRefs = useRef({}); // Refs para cada slide individual
  const [activeSlideId, setActiveSlideId] = useState(slidesData[0].id); // Estado para o slide ativo

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
      rootMargin: '0px 0px -50% 0px', // Detecta quando o slide está na metade da viewport do root
      threshold: 0, // Dispara quando qualquer parte do elemento entra no root
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
  }, []); // Executa apenas uma vez na montagem

  return (
    <section className="vertical-carousel-section">
      <div className="content-container">
        <h1>Barra principal</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci
          massa, dictum a faucibus vitae, efficitur non quam. Nullam molestie
          lorem non lacus condimentum convallis.
        </p>
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
              <p>{slide.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VerticalCarouselSection;