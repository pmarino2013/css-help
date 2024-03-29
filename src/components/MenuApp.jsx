import React from "react";
import { NavLink } from "react-router-dom";

const MenuApp = ({ handleClose }) => {
  return (
    <div className="d-flex flex-column menu">
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link fw-bold" : "nav-link"
              }
              to="/"
              onClick={handleClose && handleClose}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link fw-bold" : "nav-link"
              }
              to="/imagenes"
              onClick={handleClose && handleClose}
            >
              Imágenes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link fw-bold" : "nav-link"
              }
              to="/texto"
              onClick={handleClose && handleClose}
            >
              Textos
            </NavLink>
          </li>
        </ul>
      </nav>
      <small>
        Invitame un
        <a href=" https://tecito.app/pmarino" target="_blank">
          🍵
        </a>
      </small>
    </div>
  );
};

export default MenuApp;
