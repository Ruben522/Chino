import React from "react";
import Menu from "../pages/Menu";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-overlay"></div>

      <div className="header-inner">
        <h1>Aprende Mandarín</h1>
        <p>Tu herramienta para dominar el HSK, vocabulario y pronunciación.</p>
      </div>

      <Menu />
    </header>
  );
};

export default Header;
