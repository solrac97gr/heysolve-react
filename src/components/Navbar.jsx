import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../static/images/logo-largo.jpeg";
//Utils
import routes from '../Utils/router'

export default function Navbar() {
  return (
    <header className="wraper">
      <Link className="logocontainer" to={routes.inicio}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <nav>
        <ul className="navitems">
          <li className="navitem">
            <NavLink activeClassName="active" className="navitem" to={routes.inicio} exact>
              Inicio
            </NavLink>
          </li>
          <li className="navitem">
            <NavLink
              activeClassName="active"
              className="navitem"
              to={routes.contacto}
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
              to={routes.iniciarSesion}
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
              to={routes.registro}
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
