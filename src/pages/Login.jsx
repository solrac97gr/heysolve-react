import React, { Component } from "react";
import {Link} from 'react-router-dom';
//Estilos y estaticos
import "../styles/login.css";

//Componentes
import GoogleLogin from "../components/GoogleLogin";
import FacebookLogin from "../components/FacebookLogin";
import FormLogin from "../components/FormLogin";
import Powerby from "../components/Powerby";
import LogoCenterSquare from "../components/LogoCenterSquare";
import TitleSubtitle from "../components/TitleSubtitle";

export default class Login extends Component {
  submit() {
    alert("Enviado");
  }
  render() {
    return (
      <div className="container">
        <LogoCenterSquare />
        <div>
          <TitleSubtitle
            title={"Iniciar sesión"}
            subtitle={"con tu red social"}
          />
          <div className="social-login">
            <GoogleLogin />
            <FacebookLogin />
          </div>
          <div className="separator">ó</div>
          <FormLogin />
          <div className="redirect">
            <span>¿No tienes una cuenta?</span>
            <Link to="/registrate">Registrate</Link>
          </div>
          <div className="redirect">
            <span>¿Probelmas para iniciar sesión</span>
            <a href="google.com">Reiniciar contraseña</a>
          </div>
        </div>
        <Powerby />
      </div>
    );
  }
}
