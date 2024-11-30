// Barra de navegación o encabezado.
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Planificador de Comidas</h1>
      <button className="login-button">Iniciar sesión</button>
    </header>
  );
};

export default Header;
