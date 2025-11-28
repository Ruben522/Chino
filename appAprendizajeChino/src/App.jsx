import React from "react";
import Menu from "./pages/Menu";
import Header from "./components/Header";
import Contenido from "./components/Contenido";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<>
			<div className="container-app">
				<Header />
				<Contenido />
				<Footer />
			</div>
		</>
	);
}

export default App;
