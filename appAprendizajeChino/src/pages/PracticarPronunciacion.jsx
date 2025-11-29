import React, { useEffect, useState } from "react";
import Contenedor from "../components/Contenedor";
import Audio from "../components/Audio";
import useMicRecorder from "../components/MicRecorder";

import hsk1 from "../assets/hsk/hsk1.json";
import hsk2 from "../assets/hsk/hsk2.json";

import "./PracticarPronunciacion.css";

const levels = { 1: hsk1, 2: hsk2 };

const strip = (str) =>
  str.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();

const match = (recognized, chinese, pinyin) => {
  if (!recognized) return false;
  if (recognized.includes(chinese)) return true;

  const a = strip(recognized);
  const b = strip(pinyin);
  return a === b || a.includes(b) || b.includes(a);
};

export default function PracticarPronunciacion() {
  const [level, setLevel] = useState(1);
  const data = levels[level];

  const [index, setIndex] = useState(0);
  const target = data[index];

  // Stats
  const [total, setTotal] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  const [fallos, setFallos] = useState(0);

  const {
    transcript,
    status,
    listening,
    toneDetected,
    recordedAudioURL,
    startListening,
    stopListening,
  } = useMicRecorder("zh-CN");

  // Evaluar al terminar
  useEffect(() => {
    if (status === "finished") {
      const ok = match(transcript, target.chinese, target.pinyin);

      setTotal((t) => t + 1);
      if (ok) setAciertos((n) => n + 1);
      else setFallos((n) => n + 1);
    }
  }, [status]);

  // Reiniciar estado al cambiar palabra
  const cambiarPalabra = (offset) => {
    setIndex((i) => (i + offset + data.length) % data.length);
  };

  const resetStats = () => {
    setTotal(0);
    setAciertos(0);
    setFallos(0);
  };

  return (
    <Contenedor>
      <h2>🎤 Practicar pronunciación</h2>

      <div className="practice-controls">
        <div>
          <label>Nivel: </label>
          <select
            value={level}
            onChange={(e) => {
              setLevel(Number(e.target.value));
              resetStats();
              setIndex(0);
            }}
          >
            <option value={1}>HSK 1</option>
            <option value={2}>HSK 2</option>
          </select>
        </div>

        <div className="stats">
          <div>Total: <strong>{total}</strong></div>
          <div>Aciertos: <strong>{aciertos}</strong></div>
          <div>Fallos: <strong>{fallos}</strong></div>
        </div>
      </div>

      <div className="practice-card">
        <div className="practice-word">
          <div className="practice-chinese">{target.chinese}</div>
          <div className="practice-pinyin">{target.pinyin}</div>
          <div className="practice-translation">{target.spanish}</div>
        </div>

        <div className="practice-actions">
          <Audio text={target.chinese}>🔊 Escuchar</Audio>

          {!listening ? (
            <button className="mic-btn" onClick={startListening}>
              🎙 Hablar
            </button>
          ) : (
            <button className="mic-btn listening" onClick={stopListening}>
              🔴 Parar
            </button>
          )}

          <button className="prev-btn" onClick={() => cambiarPalabra(-1)}>
            ← Anterior
          </button>

          <button className="next-btn" onClick={() => cambiarPalabra(1)}>
            Siguiente →
          </button>
        </div>

        <div className="practice-feedback">
          <p><strong>Has dicho:</strong> {transcript || "—"}</p>

          {toneDetected !== null && (
            <p className="tone-feedback">
              🎵 Detectado tono: <strong>{toneDetected}</strong>
            </p>
          )}
          
          <div className="practice-user-audio">
            <h4>🎧 Tu pronunciación:</h4>
            {recordedAudioURL ? (
              <audio controls src={recordedAudioURL} className="recorded-player" />
            ) : (
              <p className="no-audio">No hay grabación aún</p>
            )}
          </div>

          {status === "finished" &&
            match(transcript, target.chinese, target.pinyin) &&
            <p className="status correct">✔ ¡Correcto!</p>
          }

          {status === "finished" &&
            !match(transcript, target.chinese, target.pinyin) &&
            <p className="status incorrect">❌ Incorrecto</p>
          }

          {status === "error" && <p className="status error">⚠ Error del micrófono</p>}
        </div>
      </div>
    </Contenedor>
  );
}
