// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Futbol Noticias</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/noticias">Noticias</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/about">Sobre Nosotros</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Futbol Noticias. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
