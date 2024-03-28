import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import MenuVerticalApp from "../components/MenuVerticalApp";
import logo from "../assets/css_help.png";
const HomeScreen = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="container">
      <div className="row px-5 py-3 py-md-5 logo-fixed flex-column bg-white z-1">
        <div className="col">
          <img className="logo" src={logo} alt="logo" />
          <div>
            <span className="text-muted">
              Hecho con 💚 por <span className="fw-bold">DevTuc</span>
            </span>
          </div>
        </div>
        <div className="col">
          <div className="d-grid d-md-none mt-3">
            <button className="button" onClick={handleShow}>
              Menú
            </button>
          </div>
        </div>
      </div>
      <div className="row container-menu">
        <div className="col-md-4 col-12 mb-3">
          <div className="d-md-grid menu-btn d-none">
            <button className="button" onClick={handleShow}>
              Menú
            </button>
          </div>

          <MenuVerticalApp show={show} handleClose={handleClose} />
        </div>
        <div className="col-md-8 col-12 border-content  p-md-4 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
