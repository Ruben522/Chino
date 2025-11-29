import React from "react";
import Contenedor from "../components/Contenedor";
import Audio from "../components/Audio";

export default function ExamReview() {
  const ranking = JSON.parse(localStorage.getItem("examRanking") || "[]");

  // Leer index desde la URL
  const params = new URLSearchParams(window.location.search);
  const index = Number(params.get("index"));

  const exam = ranking[index];

  if (!exam) {
    return (
      <Contenedor>
        <h2>No se encontró el examen.</h2>
        <a href="/exam-ranking">
          <button>Volver al ranking</button>
        </a>
      </Contenedor>
    );
  }

  return (
    <Contenedor>
      <h2>📖 Revisión del examen</h2>

      <h3>
        Nivel HSK {exam.level} — {exam.score}/{exam.total}
      </h3>
      <p>Fecha: {exam.date}</p>

      {exam.answers.map((q, i) => (
        <div key={i} className="review-card">
          <h4>{i + 1}. {q.prompt}</h4>

          {q.type === "audio" && (
            <Audio text={q.word.chinese}>🔊 Escuchar nuevamente</Audio>
          )}

          <p>
            <strong>Tu respuesta: </strong>
            <span style={{ color: q.isCorrect ? "green" : "red" }}>
              {q.selected || "(Sin responder)"}
            </span>
          </p>

          <p>
            <strong>Correcta:</strong> {q.correct}
          </p>

          <hr />
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <a href="/exam-ranking">
          <button>Volver al ranking</button>
        </a>
        <a href="/exam">
          <button>Repetir examen</button>
        </a>
      </div>
    </Contenedor>
  );
}
