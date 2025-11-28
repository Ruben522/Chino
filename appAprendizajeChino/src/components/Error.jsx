import React from 'react';
import Contenedor from './Contenedor';

const Error = ({ message = 'Ha ocurrido un error inesperado.', title = 'Algo salió mal' }) => {
  return (
    <Contenedor>
      <h2>{title}</h2>
      <p>{message}</p>
    </Contenedor>
  );
};

export default Error;