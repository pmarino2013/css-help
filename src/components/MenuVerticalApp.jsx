import React from "react";

import logo from "../assets/css_help.png";

import Offcanvas from "react-bootstrap/Offcanvas";
import MenuApp from "./MenuApp";
const MenuVerticalApp = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <img src={logo} alt="logo" />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <MenuApp handleClose={handleClose} />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MenuVerticalApp;
