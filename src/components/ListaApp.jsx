import React from "react";

const ListaApp = ({ array }) => {
  return (
    <ul>
      {array.map((prop, index) => (
        <li key={index} className="text-xl">
          <span className="fw-bold">{prop.propiedad}:</span>
          <span> {prop.descripcion}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListaApp;
