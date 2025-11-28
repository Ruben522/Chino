import React from 'react';
import Contenedor from '../components/Contenedor';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Asumimos un CSS para los enlaces de Home
import temploImg from '../assets/imgs/templo.jpg';
const HomePage = () => {
  return (
    <Contenedor>
      <h1>👋 Bienvenido a tu App de Flashcards de Mandarín!</h1>
      <p>
        Esta aplicación te ayudará a memorizar caracteres, Pinyin y significado de las palabras HSK.
        Elige cómo quieres empezar a estudiar:
      </p>

      <div className="home-links">
        <Link to="/study-deck">
          <button>🃏 Empezar a Jugar con Flashcards</button>
        </Link>

        <Link to="/vocab-list">
          <button>📚 Ver la Lista Completa de Vocabulario</button>
        </Link>
        <Link to="/radicals">
          <button>📘 Explorar Radicales</button>
        </Link>
        <Link to="/frases">
          <button>📝 Practicar con Frases</button>
        </Link>
      </div>
      <section className="home-info">
        <img
          src={temploImg}
          alt="China"
        />
        <div>
          <h2>¿Por qué aprender chino?</h2>
          <p>
            El mandarín es uno de los idiomas más hablados del mundo.
            Aprenderlo abre puertas en cultura, trabajo y viajes.
            Con nuestros mazos HSK podrás avanzar paso a paso.
          </p>
        </div>
      </section>

    </Contenedor>
  );
};

export default HomePage;