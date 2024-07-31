// src/components/Header.js
import React from 'react';
import './Header.css';
import backgroundImage from '../assets/images/Corner-Kick.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Fútbol Noticias</h1>
        <p>Últimas noticias del Brasileirao</p>
      </div>
    </header>
  );
};

export default Header;
