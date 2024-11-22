import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className="features-section">
      <div className="feature-card">
        <img src="/images/pros_1.webp" alt="Seguridad 24/7" className="feature-image" />
        <h3>Seguridad 24/7</h3>
      </div>
      <div className="feature-card">
        <img src="/images/pros_2.webp" alt="Conectividad y Ubicación" className="feature-image" />
        <h3>Conectividad y Ubicación</h3>
      </div>
      <div className="feature-card">
        <img src="/images/pros_3.webp" alt="Espacios Verdes" className="feature-image" />
        <h3>Espacios Verdes</h3>
      </div>
    </div>
  );
}

export default Features;
