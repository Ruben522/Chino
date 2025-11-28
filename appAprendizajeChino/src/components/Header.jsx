import React from "react";
import Menu from "../pages/Menu";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<div className="header-overlay">
				<h1>Aprende Mandarín</h1>
				<p>Tu herramienta para estudiar vocabulario HSK</p>
			</div>
			<Menu />
		</header>
	);
};

export default Header;
