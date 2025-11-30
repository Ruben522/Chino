import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

/* Submenú profesional tipo Udemy / Coursera */
const Dropdown = ({ label, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="menu-item dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="menu-link">
        {label} ▾
      </span>

      {open && (
        <div className="dropdown-menu">
          {items.map((item, idx) =>
            item === "---" ? (
              <div key={idx} className="dropdown-divider"></div>
            ) : (
              <Link key={item.to} to={item.to} className="dropdown-link">
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

const Menu = () => {
  const estudiar = [
    { to: "/study-deck", label: "Flashcards" },
    { to: "/vocab-list", label: "Vocabulario" },
    "---",
    { to: "/radicals", label: "Radicales" },
    { to: "/tonos", label: "Tonos" },
  ];

  const practicas = [
    { to: "/practica-pronunciacion", label: "Pronunciación" },
    { to: "/minijuego-frases", label: "Minijuego frases" },
    { to: "/analizador", label: "Analizador" },
  ];

  const extras = [
    { to: "/frases", label: "Frases" },
    { to: "/exam", label: "Examen" },
    { to: "/exam-ranking", label: "Ranking" },
  ];

  return (
    <nav className="main-menu">
      <Link to="/" className="menu-item menu-link">
        Inicio
      </Link>

      <Dropdown label="Estudiar" items={estudiar} />
      <Dropdown label="Prácticas" items={practicas} />
      <Dropdown label="Extras" items={extras} />
    </nav>
  );
};

export default Menu;
