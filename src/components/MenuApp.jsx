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
      <a
        className="text-slate-100"
        href=" https://tecito.app/pmarino"
        target="_blank"
      >
        <small>Invitame un 🍵</small>
      </a>
    </div>
  );
};

export default MenuApp;
