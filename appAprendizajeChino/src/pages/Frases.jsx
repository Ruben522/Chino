import React, { useState } from "react";
import Contenedor from "../components/Contenedor";
import Audio from "../components/Audio";

import hsk1 from "../assets/frases/hsk1.json";

import "./Frases.css";

const levels = {
	1: hsk1,
};

// 🎨 Colores del análisis
const colorSet = [
	"#d62828", 
	"#1d6fff", 
	"#2f9e44",
	"#7e22ce",
	"#e8590c", 
	"#0caadc"
];

// 🎨 Colores por tono
const toneColors = {
	1: "#e9c46a", // amarillo
	2: "#2a9d8f", // verde
	3: "#1d4ed8", // azul
	4: "#d62828", // rojo
	0: "#6b7280"  // gris
};

// Vocales con tono → número de tono
const toneMarks = {
  "ā": 1, "ē": 1, "ī": 1, "ō": 1, "ū": 1, "ǖ": 1,
  "á": 2, "é": 2, "í": 2, "ó": 2, "ú": 2, "ǘ": 2,
  "ǎ": 3, "ě": 3, "ǐ": 3, "ǒ": 3, "ǔ": 3, "ǚ": 3,
  "à": 4, "è": 4, "ì": 4, "ò": 4, "ù": 4, "ǜ": 4
};

// Detectar tono del pinyin
const getTone = (pinyin) => {
  for (let char of pinyin) {
    if (toneMarks[char]) return toneMarks[char];
  }
  return 0;
};

const Frases = () => {
	const [level, setLevel] = useState(1);
	const [tense, setTense] = useState("");
	const [colorMode, setColorMode] = useState(false);
	const [toneMode, setToneMode] = useState(false); // 🔥 nuevo toggle

	const data = levels[level];

	const filtered = tense ? data.filter((f) => f.tense === tense) : data;

	return (
		<Contenedor>
			<h2>📝 Frases útiles HSK {level}</h2>

			{/* Selectores */}
			<div className="frases-selectors">
				<div>
					<label>Nivel: </label>
					<select
						value={level}
						onChange={(e) => setLevel(Number(e.target.value))}
					>
						<option value={1}>HSK 1</option>
					</select>
				</div>

				<div>
					<label>Tiempo verbal: </label>
					<select value={tense} onChange={(e) => setTense(e.target.value)}>
						<option value="">Todos</option>
						<option value="pasado">Pasado</option>
						<option value="presente">Presente</option>
						<option value="futuro">Futuro</option>
					</select>
				</div>
			</div>

			{/* 🔥 TOGGLE COLORES ANALYSIS */}
			<div className="frases-color-toggle">
				<label>
					<input
						type="checkbox"
						checked={colorMode}
						onChange={() => setColorMode(!colorMode)}
					/>
					&nbsp;Colorear análisis
				</label>
			</div>

			{/* 🔥 TOGGLE TONOS */}
			<div className="frases-color-toggle">
				<label>
					<input
						type="checkbox"
						checked={toneMode}
						onChange={() => setToneMode(!toneMode)}
					/>
					&nbsp;Colorear tonos del pinyin
				</label>
			</div>

			{/* Lista de frases */}
			<div className="frases-list">
				{filtered.map((phrase) => (
					<div className="frase-card" key={phrase.id}>
						<div className="frase-top">
							<div className="frase-chinese">{phrase.chinese}</div>
							<Audio text={phrase.chinese}>🔊</Audio>
						</div>

						<div className="frase-pinyin">{phrase.pinyin}</div>
						<div className="frase-spanish">{phrase.spanish}</div>

						<div className="frase-analysis">
							{phrase.analysis.map((part, idx) => {
								const color = colorSet[idx % colorSet.length];
								const tone = getTone(part.pinyin);

								return (
									<div
										className="analysis-part"
										key={idx}
										style={{
											backgroundColor: colorMode ? color + "22" : "transparent",
											borderLeft: colorMode ? `5px solid ${color}` : "none",
										}}
									>
										{/* Carácter */}
										<span
											className="analysis-char"
											style={{ color: colorMode ? color : "inherit" }}
										>
											{part.char}
										</span>

										{/* Pinyin coloreado por tono */}
										<span
											className="analysis-pinyin"
											style={{
												color: toneMode ? toneColors[tone] : (colorMode ? color : "inherit")
											}}
										>
											{part.pinyin}
										</span>

										{/* Traducción */}
										<span
											className="analysis-spanish"
											style={{ color: colorMode ? color : "inherit" }}
										>
											{part.spanish}
										</span>
									</div>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</Contenedor>
	);
};

export default Frases;
