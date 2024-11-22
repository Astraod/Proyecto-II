import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-background">
        <img src="/images/hero_section.webp" alt="Residencial Los Robles" className="background-image" />
      </div>
      <div className="hero-content">
        <img src="/images/los_robles_logo.webp" alt="Los Robles Logo" className="hero-logo" />
        {/* <h1>Los Robles</h1> */}
        <h2>Descubre el lugar donde sueños y realidad se encuentran</h2>
        <p>
          En Residencial Los Robles, cada detalle ha sido cuidadosamente planificado para ofrecer a nuestros
          residentes una vida llena de confort, seguridad y exclusividad. Ubicado en el corazón de una hermosa
          ciudad, nuestro complejo ofrece acceso inmediato a las mejores escuelas, centros comerciales, y áreas
          de esparcimiento, asegurando una experiencia de vida sin igual.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
