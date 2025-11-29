import React from "react";
import Contenedor from "../components/Contenedor";

export default function ExamResult() {
  const ranking = JSON.parse(localStorage.getItem("examRanking") || "[]");
  const last = ranking[ranking.length - 1];

  return (
    <Contenedor>
      <h2>🎉 Resultado del Examen</h2>

      <h3>
        Obtuviste <strong>{last.score}</strong> de {last.total}
      </h3>

      <p>Fecha: {last.date}</p>
      <p>Nivel: HSK {last.level}</p>

      <div style={{ marginTop: "20px" }}>
        <a href="/exam-ranking">
          <button>Ver ranking completo</button>
        </a>
        <a href="/exam-review">
          <button>Repetir examen</button>
        </a>
      </div>
    </Contenedor>
  );
}
