import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Residencial Los Robles. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="#!">Política de Privacidad</a></li>
          <li><a href="#!">Términos y Condiciones</a></li>
          <li><a href="#!">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
