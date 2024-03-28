import React from "react";
import { NavLink } from "react-router-dom";

const MenuApp = () => {
  return (
    <nav className="menu  ">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold" : "nav-link"
            }
            to="/"
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
          >
            Textos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuApp;
