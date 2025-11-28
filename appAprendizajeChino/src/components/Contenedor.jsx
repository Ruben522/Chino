import React from 'react';
import './Contenedor.css';

const Contenedor = ({ children }) => {
  return (
    <div className="main-container">
      {children}
    </div>
  );
};

export default Contenedor;