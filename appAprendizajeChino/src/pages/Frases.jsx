import React, { useState } from "react";
import Contenedor from "../components/Contenedor";
import Audio from "../components/Audio";

import hsk1 from "../assets/frases/hsk1.json";

import "./Frases.css";

const levels = {
	1: hsk1,
};

const Frases = () => {
	const [level, setLevel] = useState(1);
	const [tense, setTense] = useState("");

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
							{phrase.analysis.map((part, idx) => (
								<div className="analysis-part" key={idx}>
									<span className="analysis-char">{part.char}</span>
									<span className="analysis-pinyin">{part.pinyin}</span>
									<span className="analysis-spanish">{part.spanish}</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</Contenedor>
	);
};

export default Frases;
