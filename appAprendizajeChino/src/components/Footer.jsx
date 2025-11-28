// src/components/Footer.jsx

import React from 'react';
import './Footer.css'; // Archivo CSS para el Footer

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Mandarín Flashcards. Creado con ❤️ para el aprendizaje del Chino.</p>
    </footer>
  );
};

export default Footer;