import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className="contact-section">
      <div className="contact-background">
        <img src="/images/contact_background.webp" alt="Residencial Los Robles" className="background-image" />
      </div>
      <div className="contact-form-container">
        <h2>Encuentra tu Hogar Ideal</h2>
        <p>
          Completa el formulario a continuación y uno de nuestros asesores se pondrá en contacto contigo para
          programar una visita y mostrarte todo lo que Residencial Los Robles tiene para ofrecer. No pierdas
          la oportunidad de vivir en el hogar de tus sueños.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" placeholder="Escribe tu Nombre aquí" />
          </div>
          <div className="form-group">
            <label>Correo:</label>
            <input type="email" placeholder="Escribe tu Correo aquí" />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input type="tel" placeholder="Escribe tu Teléfono" />
          </div>
          <div className="form-group">
            <label>Mensaje:</label>
            <textarea placeholder="Déjanos tu mensaje"></textarea>
          </div>
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
