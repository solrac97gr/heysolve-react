import React, { Component } from "react";
import {Link} from 'react-router-dom';
//Estilos y estaticos
import "../styles/login.css";

//Componentes
import GoogleLogin from "../components/GoogleLogin";
import FacebookLogin from "../components/FacebookLogin";
import FormRegister from "../components/FormRegister";
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
            title={"Registrate"}
            subtitle={"con tu red social"}
          />
          <div className="social-login">
            <GoogleLogin />
            <FacebookLogin />
          </div>
          <div className="separator">ó</div>
          <FormRegister />
          <div className="redirect">
            <span>¿Ya tienes una cuenta?</span>
            <Link to="/login">Ingresa</Link>
          </div>
        </div>
        <Powerby />
      </div>
    );
  }
}
