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
		</nav>
	); 
};
export default Menu;
