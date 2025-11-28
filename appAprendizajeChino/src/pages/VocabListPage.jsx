import React, { useState } from "react";
import Contenedor from "../components/Contenedor";
import Audio from "../components/Audio";
import hsk1 from "../assets/hsk/hsk1.json";
import hsk2 from "../assets/hsk/hsk2.json";

import "./VocabListPage.css";

// Mapa de niveles → JSON
const levels = {
	1: hsk1,
	2: hsk2,
};

// Colores por categoría (type)
const typeColors = {
	verbo: "#d62828",
	sustantivo: "#1e40af",
	adjetivo: "#15803d",
	número: "#7e22ce",
	pronombre: "#ea580c",
	demostrativo: "#374151",
	interrogativo: "#be185d",
	expresión: "#94ac0dff",
	saludo: "#b45309",
};

const VocabListPage = () => {
	const [level, setLevel] = useState(1);
	const [category, setCategory] = useState("");

	const data = levels[level] || [];

	const filteredData = category
		? data.filter((word) => word.type === category)
		: data;

	return (
		<Contenedor>
			<h2>📚 Vocabulario HSK</h2>
			<p>Selecciona nivel y categoría para filtrar el contenido.</p>

			{/* SELECTORES */}
			<div className="selectors">
				<div>
					<label>Nivel HSK: </label>
					<select
						value={level}
						onChange={(e) => setLevel(Number(e.target.value))}
					>
						<option value={1}>HSK 1</option>
						<option value={2}>HSK 2</option>
					</select>
				</div>

				<div>
					<label>Categoría: </label>
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="">Todas</option>
						<option value="verbo">Verbos</option>
						<option value="sustantivo">Sustantivos</option>
						<option value="adjetivo">Adjetivos</option>
						<option value="número">Números</option>
						<option value="pronombre">Pronombres</option>
						<option value="demostrativo">Demostrativos</option>
						<option value="interrogativo">Interrogativos</option>
						<option value="frase">Expresión</option>
						<option value="saludo">Saludos</option>
					</select>
				</div>
			</div>

			{/* TABLA */}
			<table className="vocab-table">
				<thead>
					<tr>
						<th>Carácter</th>
						<th>Pinyin</th>
						<th>Traducción</th>
						<th>Categoría</th>
						<th>Audio</th>
					</tr>
				</thead>

				<tbody>
					{filteredData.map((word) => (
						<tr key={word.id}>
							<td>{word.chinese}</td>
							<td>{word.pinyin}</td>
							<td>{word.spanish}</td>
							<td>
								<span
									className="type-badge"
									style={{ backgroundColor: typeColors[word.type] }}
								>
									{word.type.toUpperCase()}
								</span>
							</td>
							{/* 🔊 BOTÓN DE AUDIO */}
							<td>
								<Audio text={word.chinese}>🔊</Audio>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Contenedor>
	);
};

export default VocabListPage;
