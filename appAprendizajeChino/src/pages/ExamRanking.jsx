import React from "react";
import Contenedor from "../components/Contenedor";

export default function ExamRanking() {
  const ranking = JSON.parse(localStorage.getItem("examRanking") || "[]");

  return (
    <Contenedor>
      <h2>🏆 Ranking de Exámenes</h2>

      {ranking.length === 0 && <p>Aún no hay resultados.</p>}

      <table className="ranking-table">
        <thead>
          <tr>
            <th>Puntuación</th>
            <th>Nivel</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {ranking.map((r, i) => (
            <tr key={i}>
              <td>{r.score}/{r.total}</td>
              <td>HSK {r.level}</td>
              <td>{r.date}</td>
              <td>
                <a href={`/exam-review?index=${i}`}>
                  <button>Revisar</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <a href="/exam">
          <button>Hacer otro examen</button>
        </a>
      </div>
    </Contenedor>
  );
}
