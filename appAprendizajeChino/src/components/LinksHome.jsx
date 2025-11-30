import React from "react";
import { Link } from "react-router-dom";
import "./LinksHome.css";

const LinksHome = () => {
  return (
    <div className="home-cards">

      <Link to="/study-deck" className="card">
        <span className="icon">🃏</span>
        <h3>Flashcards</h3>
        <p>Entrena memoria visual y auditiva con tarjetas dinámicas.</p>
      </Link>

      <Link to="/vocab-list" className="card">
        <span className="icon">📚</span>
        <h3>Vocabulario HSK</h3>
        <p>Explora todas las palabras por niveles y categorías.</p>
      </Link>

      <Link to="/radicals" className="card">
        <span className="icon">📘</span>
        <h3>Radicales</h3>
        <p>Descubre la estructura interna de los caracteres.</p>
      </Link>

      <Link to="/frases" className="card">
        <span className="icon">📝</span>
        <h3>Frases útiles</h3>
        <p>Aprende frases reales con análisis y audio.</p>
      </Link>

      <Link to="/practica-pronunciacion" className="card">
        <span className="icon">🎤</span>
        <h3>Pronunciación</h3>
        <p>Practica tonos y escucha ejemplos naturales.</p>
      </Link>

    </div>
  );
};

export default LinksHome;
