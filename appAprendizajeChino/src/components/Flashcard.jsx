import React, { useState } from 'react';
import Audio from "../components/Audio";
import './Flashcard.css';

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  React.useEffect(() => {
    setIsFlipped(false);
  }, [card]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard">
        <div className="front">
          <div className="hsk-level">HSK {card.level}</div>
          <div className="chinese-char">{card.chinese}</div>
          <div className="hint">Toca para ver la respuesta</div>
            <Audio text={card.chinese}>🔊</Audio>
        </div>

        <div className="back">
          <div className="pinyin">{card.pinyin}</div>
          <div className="translation">{card.spanish}</div>

          {/* 🔊 Botón también en la cara trasera */}
            <Audio text={card.chinese}>🔊</Audio>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;