import React from "react";
import Contenedor from "../components/Contenedor";
import LinksHome from "../components/LinksHome";

import caracteresImg from "../assets/imgs/caracteres.jpeg";
import heroImg from "../assets/imgs/city.jpg";
import cultureImg from "../assets/imgs/templo.jpg";

import "./HomePage.css";

const HomePage = () => {
  return (
    <Contenedor className="home-container">

      {/* =========================== */}
      {/* HERO PRINCIPAL */}
      {/* =========================== */}
      <section className="hero">
        <img src={heroImg} alt="Ciudad de China" className="hero-img" />

        <div className="hero-text">
          <h1>Aprende Chino Mandarín de Forma Clara y Moderna</h1>
          <p>
            Flashcards, vocabulario, frases y pronunciación con un método visual, natural y
            progresivo. Perfecto para avanzar por los niveles HSK paso a paso.
          </p>

          <a href="/study-deck" className="hero-button">
            Comenzar ahora →
          </a>
        </div>
      </section>

      {/* =========================== */}
      {/* ¿POR QUÉ APRENDER CHINO? */}
      {/* =========================== */}
      <section className="why">
        <div className="why-content">
          <h2>🥢 ¿Por qué aprender chino?</h2>
          <p>
            El mandarín es el idioma más hablado del mundo y una puerta abierta a nuevas
            oportunidades culturales, laborales y personales.
            <br /><br />
            Aprenderlo desarrolla tu memoria, mejora tu concentración y te conecta con una de
            las civilizaciones más ricas y fascinantes de la historia.
            <br /><br />
            Con nuestros recursos HSK, podrás avanzar de forma ordenada, visual e intuitiva.
          </p>
        </div>

        <img src={cultureImg} alt="Templo chino" className="why-img" />
      </section>
      {/* =========================== */}
      {/* SECCIÓN SOBRE LOS CARACTERES */}
      {/* =========================== */}

      <section className="characters-section">
        <img
          src={caracteresImg}
          alt="Caracteres chinos"
          className="characters-img"
        />

        <div className="characters-content">
          <h2>🀄 La Belleza de los Caracteres Chinos</h2>
          <p>
            Los caracteres chinos, conocidos como <strong>hanzi</strong>, contienen
            historia, significado y una estructura visual única.
            <br /><br />
            Aprenderlos no solo mejora tu memoria y tu capacidad de análisis, sino
            que también te conecta con miles de años de cultura escrita.
            <br /><br />
            En esta app podrás ver cómo se forman, cuáles son sus radicales y cómo se
            relacionan entre sí para comprender mejor su origen y su significado.
          </p>
        </div>
      </section>

      {/* =========================== */}
      {/* SECCIONES PRINCIPALES */}
      {/* =========================== */}
      <section className="features">
        <h2>📘 Explora todo lo que puedes aprender</h2>
        <p className="features-subtitle">
          Elige tu camino y aprende a tu ritmo con herramientas diseñadas para un estudio real.
        </p>

        <LinksHome />
      </section>

      {/* =========================== */}
      {/* BLOQUE CULTURAL */}
      {/* =========================== */}
      <section className="culture-block">
        <h2>🌏 Aprende con contexto</h2>
        <p>
          No solo estudiarás palabras: entenderás cómo se usan, cómo se pronuncian y cómo se
          construyen dentro de frases reales.
          <br /><br />
          Cada módulo incluye audio, análisis detallado y ejemplos prácticos para que tu
          aprendizaje sea más natural y efectivo.
        </p>
      </section>

    </Contenedor>
  );
};

export default HomePage;
