import React from 'react';
import './Dashboard.css';

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard">
      <h1>Bienvenido, Admin</h1>
      <p>Esta es la página principal del dashboard de Los Robles.</p>
      <button onClick={onLogout} className="logout-button">
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Dashboard;
