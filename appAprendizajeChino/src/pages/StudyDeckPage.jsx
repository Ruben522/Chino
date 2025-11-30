import React, { useState } from "react";
import Contenedor from "../components/Contenedor";
import Flashcard from "../components/Flashcard";

import hsk1 from "../assets/hsk/hsk1.json";
import hsk2 from "../assets/hsk/hsk2.json";

import "./StudyDeckPage.css";

const levels = { 1: hsk1, 2: hsk2 };

const StudyDeckPage = () => {
  const [level, setLevel] = useState(1);
  const [index, setIndex] = useState(0);

  const data = levels[level] ?? [];

  const next = () => {
    if (data.length === 0) return;
    setIndex((i) => (i + 1) % data.length);
  };

  const prev = () => {
    if (data.length === 0) return;
    setIndex((i) => (i === 0 ? data.length - 1 : i - 1));
  };

  const changeLevel = (e) => {
    setLevel(Number(e.target.value));
    setIndex(0);
  };

  return (
    <Contenedor>
      <h2>🃏 Flashcards HSK</h2>

      <div className="flashcard-select-level">
        <label>Nivel:</label>
        <select value={level} onChange={changeLevel}>
          <option value={1}>HSK 1</option>
          <option value={2}>HSK 2</option>
        </select>
      </div>

      <div className="flashcard-wrapper">
        {data.length > 0 ? (
          <Flashcard card={data[index]} />
        ) : (
          <p>No hay datos disponibles.</p>
        )}
      </div>

      <div className="controls">
        <button onClick={prev} disabled={data.length === 0}>
          ← Anterior
        </button>

        <div className="card-counter">
          {data.length > 0 ? `${index + 1} / ${data.length}` : "0 / 0"}
        </div>

        <button onClick={next} disabled={data.length === 0}>
          Siguiente →
        </button>
      </div>
    </Contenedor>
  );
};

export default StudyDeckPage;
