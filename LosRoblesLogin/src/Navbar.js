import React from 'react';
import './Navbar.css';

function Navbar({ onLoginClick }) {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Los Robles</h1>
      </div>
      <div className="nav-buttons">
        <button onClick={onLoginClick} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
