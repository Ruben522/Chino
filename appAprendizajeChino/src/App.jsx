import React from "react";
import Header from "./components/Header";
import Contenido from "./components/Contenido";
import Footer from "./components/Footer";
import "./App.css";
import "./Global.css";

const App = () => {
  return (
    <div className="container-app">
      <Header />
      <Contenido />
      <Footer />
    </div>
  );
};

export default App;
