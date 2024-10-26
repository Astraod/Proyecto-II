// Importaciones y configuración inicial de React
import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img src={process.env.PUBLIC_URL + '/images/los_robles_logo.webp'} alt="Los Robles Logo" className="login__logo" />

        <form className="login__form">
          <label htmlFor="username">Nombre</label>
          <input className="login__form__input" placeholder="Escribe tu Nombre aquí" type="text" id="username" />

          <label htmlFor="password">Contraseña</label>
          <input className="login__form__input" placeholder="Escribe tu Contraseña aquí" type="password" id="password" />

          <input type="submit" className="login__button" value="Iniciar" />
        </form>
      </div>
    </div>
  );
}

export default Login;
