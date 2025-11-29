import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

// Componente que contiene enlaces de navegación dentro de la aplicación.
const Menu = () => {
	return (
		<nav className="menu">
			<Link className="menu-link" to="/">
				Inicio
			</Link>
			<Link className="menu-link" to="/study-deck">
				Flashcards
			</Link>
			<Link className="menu-link" to="/vocab-list">
				Vocabulario
			</Link>
			<Link className="menu-link" to="/radicals">
  				Radicales
			</Link>
			<Link className="menu-link" to="/frases">
  				Frases
			</Link>
			<Link className="menu-link" to="/practica-pronunciacion">
			Pronunciación
			</Link>
			<Link className="menu-link" to="/exam">Examen</Link>
			<Link className="menu-link" to="/exam-ranking">Ranking</Link>
			<Link className="menu-link" to="/exam-review">Revisión</Link>

		</nav>
	); 
};
export default Menu;
