import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../static/images/logo-largo.jpeg";

export default function Navbar() {
  return (
    <header className="wraper">
      <Link className="logocontainer" to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <nav>
        <ul className="navitems">
          <li className="navitem">
            <NavLink activeClassName="active" className="navitem" to="/" exact>
              Inicio
            </NavLink>
          </li>
          <li className="navitem">
            <NavLink
              activeClassName="active"
              className="navitem"
              to="/contacto"
              exact
            >
              Contacto
            </NavLink>
          </li>
          <li className="navitem">
            {" "}
            <NavLink
              activeClassName="active"
              className="navitem"
              to="/login"
              exact
            >
              Ingresar
            </NavLink>
          </li>
          <li className="navitem">
            {" "}
            <NavLink
              activeClassName="active"
              className="navitem"
              to="/registrate"
              exact
            >
              Registrarse
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
