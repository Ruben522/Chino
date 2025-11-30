import React, { useState } from "react";
import Contenedor from "../components/Contenedor";
import Audio from "../components/Audio";
import "./TonosPage.css";

// Banco de palabras por tono
const TONE_WORDS = {
  1: [
    { char: "妈", pinyin: "mā" },
    { char: "花", pinyin: "huā" },
    { char: "天", pinyin: "tiān" }
  ],
  2: [
    { char: "麻", pinyin: "má" },
    { char: "牙", pinyin: "yá" },
    { char: "来", pinyin: "lái" }
  ],
  3: [
    { char: "马", pinyin: "mǎ" },
    { char: "你", pinyin: "nǐ" },
    { char: "好", pinyin: "hǎo" }
  ],
  4: [
    { char: "骂", pinyin: "mà" },
    { char: "大", pinyin: "dà" },
    { char: "去", pinyin: "qù" }
  ],
  5: [
    { char: "吗", pinyin: "ma" },
    { char: "呢", pinyin: "ne" },
    { char: "的", pinyin: "de" }
  ]
};

// Función para curvas
const ToneCurve = ({ tone }) => {
  switch (tone) {
    case 1:
      return <svg width="80" height="35"><line x1="0" y1="10" x2="80" y2="10" stroke="#0066ff" strokeWidth="4" /></svg>;
    case 2:
      return <svg width="80" height="35"><line x1="10" y1="30" x2="70" y2="5" stroke="#00aa44" strokeWidth="4" /></svg>;
    case 3:
      return <svg width="80" height="35"><path d="M10 10 Q 40 30 70 10" stroke="#cc8800" strokeWidth="4" fill="none" /></svg>;
    case 4:
      return <svg width="80" height="35"><line x1="10" y1="5" x2="70" y2="30" stroke="#dd2222" strokeWidth="4" /></svg>;
    case 5:
      return <svg width="80" height="35"><circle cx="40" cy="18" r="5" fill="#555" /></svg>;
    default:
      return null;
  }
};

export default function TonosPage() {
  const [words, setWords] = useState({
    1: TONE_WORDS[1][0],
    2: TONE_WORDS[2][0],
    3: TONE_WORDS[3][0],
    4: TONE_WORDS[4][0],
    5: TONE_WORDS[5][0]
  });

  const changeWord = (tone) => {
    const list = TONE_WORDS[tone];
    const random = list[Math.floor(Math.random() * list.length)];
    setWords((prev) => ({ ...prev, [tone]: random }));
  };

  return (
    <Contenedor>
      <h2>🎵 Estudio de Tonos del Mandarín</h2>
      <p>
        Aprende los tonos del mandarín con ejemplos claros, audio y curvas visuales.
        Pulsa <strong>“Cambiar palabra”</strong> para escuchar diferentes ejemplos del mismo tono.
      </p>

      <div className="tones-grid">
        {[1, 2, 3, 4, 5].map((tone) => {
          const w = words[tone];
          return (
            <div className={`tone-card tone-${tone}`} key={tone}>
              <h3>Tono {tone === 5 ? "Neutro" : tone}</h3>

              <div className="tone-char">{w.char}</div>
              <div className="tone-pinyin">{w.pinyin}</div>

              <div className="tone-curve">
                <ToneCurve tone={tone} />
              </div>

              <div className="tone-buttons">
                <Audio text={w.pinyin}>🔊 Escuchar</Audio>
                <button onClick={() => changeWord(tone)}>Cambiar palabra</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="sandhi-box">
        <h3>🔄 Cambios de tono (Sandhi)</h3>

        <h4>3️⃣ + 3️⃣ → 2️⃣ + 3️⃣</h4>
        <p><strong>你好</strong> (nǐ hǎo) se pronuncia <strong>ní hǎo</strong>.</p>
        <Audio text="你好">🔊</Audio>

        <h4>不 cambia según el tono siguiente</h4>
        <p><strong>不对</strong> → bú duì</p>
        <Audio text="不对">🔊</Audio>

        <h4>一 cambia según el contexto</h4>
        <p>Según el tono siguiente, 一 puede sonar yī, yí o yì.</p>
        <Audio text="一会儿">🔊</Audio>
      </div>
    </Contenedor>
  );
}
