import React from "react";
import Contenedor from "../components/Contenedor";
import radicals from "../assets/radicals/radicals.json";
import Audio from "../components/Audio";
import "./RadicalsPage.css";

const RadicalsPage = () => {
  return (
    <Contenedor>
      <h2>📘 Radicales del Chino (部首)</h2>
      <p>Estos radicales son la base de la mayoría de caracteres del mandarín.</p>

      <div className="radicals-list">
        {radicals.map((rad) => (
          <div className="radical-card" key={rad.id}>
            <div className="radical-symbol">{rad.radical}</div>
            <div className="radical-pinyin">{rad.pinyin}</div>
            <div className="radical-meaning">{rad.meaning}</div>

            <Audio text={rad.radical}>🔊 Escuchar Radical</Audio>
            <p className="radical-explanation">{rad.explanation}</p>

            <div className="radical-examples">
              <strong>Ejemplos:</strong>
              <ul>
                {rad.examples.map((ex, i) => (
                  <li key={i}>
                    <Audio text={ex.split(" ")[0]}>🔊</Audio>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Contenedor>
  );
};

export default RadicalsPage;
