import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/css_help.png";

import Offcanvas from "react-bootstrap/Offcanvas";
const MenuVerticalApp = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <img src={logo} alt="logo" />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <nav className="menu  ">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link fw-bold" : "nav-link"
                }
                to="/"
                onClick={handleClose}
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
                onClick={handleClose}
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
                onClick={handleClose}
              >
                Textos
              </NavLink>
            </li>
          </ul>
        </nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MenuVerticalApp;
