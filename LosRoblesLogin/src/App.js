import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Features from './Features';
import ContactForm from './ContactForm';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función que se ejecuta al hacer clic en el botón de login
  const handleLoginClick = () => {
    setIsLoginVisible(true);
  };

  // Función para cerrar el modal de login
  const handleCloseLogin = () => {
    setIsLoginVisible(false);
  };

  // Función que se ejecuta al enviar el formulario de login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      setIsLoginVisible(false);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              !isAuthenticated ? (
                <>
                  <Navbar onLoginClick={handleLoginClick} />
                  <HeroSection />
                  <Features />
                  <ContactForm />
                  <Footer />
                  {isLoginVisible && (
                    <div className="overlay">
                      <div className="login-modal">
                        <h2>Login Los Robles</h2>
                        <form onSubmit={handleLoginSubmit}>
                          <div className="input-group">
                            <label>Usuario:</label>
                            <input
                              type="text"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                          <div className="input-group">
                            <label>Contraseña:</label>
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div className="button-group">
                            <button type="submit" className="login-button">
                              Iniciar Sesión
                            </button>
                            <button
                              type="button"
                              onClick={handleCloseLogin}
                              className="close-button"
                            >
                              Cancelar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
