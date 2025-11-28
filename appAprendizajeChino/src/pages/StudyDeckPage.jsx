import React, { useState } from "react";
import Contenedor from "../components/Contenedor";
import Flashcard from "../components/Flashcard";

import hsk1 from "../assets/hsk/hsk1.json";
import hsk2 from "../assets/hsk/hsk2.json";

import "./StudyDeckPage.css";

const levels = {
  1: hsk1,
  2: hsk2
};

const StudyDeckPage = () => {
  const [level, setLevel] = useState(1);
  const [index, setIndex] = useState(0);

  const data = levels[level] || [];

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const changeLevel = (e) => {
    const newLevel = Number(e.target.value);
    setLevel(newLevel);
    setIndex(0); // reiniciar para evitar errores
  };

  return (
    <Contenedor>
      <h2>🃏 Flashcards HSK</h2>

      {/* Selector de nivel */}
      <div className="flashcard-select-level">
        <label>Nivel:</label>
        <select value={level} onChange={changeLevel}>
          <option value={1}>HSK 1</option>
          <option value={2}>HSK 2</option>
        </select>
      </div>

      <div className="flashcard-wrapper">
        <Flashcard card={data[index]} />
      </div>

      <div className="controls">
        <button onClick={prev}>← Anterior</button>
        <div className="card-counter">
          {index + 1} / {data.length}
        </div>
        <button onClick={next}>Siguiente →</button>
      </div>
    </Contenedor>
  );
};

export default StudyDeckPage;
