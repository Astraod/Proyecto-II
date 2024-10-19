// Importaciones y configuración inicial de React
import React from 'react';
import './App.css';

// Navbar Component
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <img src={process.env.PUBLIC_URL + '/images/logo_robles_text.webp'} alt="Los Robles Logo" className="navbar__logo" />
        <a href="#login" className="navbar__login">Iniciar Sesión</a>
      </div>
    </header>
  );
}

// Hero Section Component
function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/hero_section.webp'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '600px',
        paddingTop: '150px', // Añadir un mayor espacio superior para evitar solapamiento
        marginBottom: '100px', // Añadir más espacio inferior para separar la sección Info
      }}
    >
      <div className="hero__content">
        <img src={process.env.PUBLIC_URL + '/images/los_robles_logo.webp'} alt="Los Robles Logo" className="hero__logo" />
        <h1 className="hero__title">Los Robles</h1>
        <p className="hero__description">
          En Residencial Los Robles, cada detalle ha sido cuidadosamente planificado para ofrecer a nuestros residentes una vida llena de confort, seguridad y exclusividad. Ubicado en el corazón de una hermosa ciudad, nuestro complejo ofrece acceso inmediato a las mejores escuelas, centros comerciales, y áreas de esparcimiento, asegurando una experiencia de vida sin igual.
        </p>
      </div>
    </section>
  );
}

// Info Section Component
function Info() {
  return (
    <section className="info" style={{ marginTop: '50px' }}> {/* Añadir margen superior para evitar solapamiento con la sección anterior */}
      <div className="info__item">
        <img src={process.env.PUBLIC_URL + '/images/pros_1.webp'} alt="Seguridad 24/7" className="info__image" />
        <figcaption className="info__caption">Seguridad 24/7</figcaption>
      </div>
      <div className="info__item">
        <img src={process.env.PUBLIC_URL + '/images/pros_2.webp'} alt="Conectividad y Ubicación" className="info__image" />
        <figcaption className="info__caption">Conectividad y Ubicación</figcaption>
      </div>
      <div className="info__item">
        <img src={process.env.PUBLIC_URL + '/images/pros_3.webp'} alt="Espacios Verdes" className="info__image" />
        <figcaption className="info__caption">Espacios Verdes</figcaption>
      </div>
    </section>
  );
}

// Formulario Section Component
function Formulario() {
  return (
    <section className="formulario">
      <div className="formulario__container">
        <div className="formulario__content">
          <h3 className="formulario__title">Encuentra tu Hogar Ideal</h3>
          <p className="formulario__text">
            Completa el formulario a continuación y uno de nuestros asesores se pondrá en contacto contigo para programar una visita y mostrarte todo lo que Residencial Los Robles tiene para ofrecer. No pierdas la oportunidad de vivir en el hogar de tus sueños.
          </p>
        </div>
        <form className="formulario__form" action="/action_page.php" method="post">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" placeholder="Escribe tu Nombre aquí" required />

          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" name="email" placeholder="Escribe tu Correo aquí" required />

          <label htmlFor="tel">Teléfono:</label>
          <input type="tel" id="tel" name="tel" placeholder="Escribe tu Teléfono aquí" required />

          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" placeholder="Déjanos tu mensaje" required></textarea>

          <button type="submit" className="formulario__button">Enviar</button>
        </form>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={process.env.PUBLIC_URL + '/images/los_robles_logo.webp'} alt="Los Robles Logo" className="footer__logo" />
        <p>@Los Robles - Derechos Reservados</p>
      </div>
    </footer>
  );
}

// App Component - Combinando todos los componentes
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Info />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
