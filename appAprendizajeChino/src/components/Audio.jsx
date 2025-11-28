import React from "react";
import "./Audio.css";

const Audio = ({ text, rate = 0.9, children }) => {
  
  const play = (e) => {
    e.stopPropagation?.(); // evita interferir con flips o clics del padre

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-CN";     // mandarín
    utter.rate = rate;        // velocidad (0.9 suena muy natural)
    speechSynthesis.speak(utter);
  };

  return (
    <button onClick={play} className="audio-btn-generic">
      {children ?? "🔊"}
    </button>
  );
};

export default Audio;
