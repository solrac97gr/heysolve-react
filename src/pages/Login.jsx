import React, { Component } from "react";
import "../styles/login.css";
import Logo from "../static/images/heysolve.jpeg";
import Aws from "../static/images/aws.png";

import facebooklogo from "./facebooklogo.svg"
import googlelogo from "./googlelogo.svg"

export default class Login extends Component {
submit() {
    alert("Enviado")
}
  render() {
    return (
      <div className="container">
        <div>
          <img className="logo" src={Logo} alt="Logo Heysolve" />
        </div>
        <div>
          <div className="header">
            <h1 className="pageTitle">Iniciar sesión</h1>
            <span className="pageSubtitle">con tu red social</span>
          </div>

          <div className="social-login">
            <div className="buttonSocial google">
              <img src={googlelogo} alt="Logo google" width="17px"/>
              <span>Google</span>
            </div>
            <div className="buttonSocial facebook">
            <img src={facebooklogo} alt="Logo facebook" width="17px" />
              <span>Facebook</span>
            </div>
          </div>
          <div className="separator">ó</div>
          <form action="submit">
            <span className="formTitle">Ingresa con tus datos</span>
            <span className="formGuide">Ingresa tu correo</span>
            <input type="text" placeholder="example@correo.com" />
            <span className="formGuide">Ingresa tu contraseña</span>
            <input type="text" placeholder="Su contraseña debe tener 8 dígitos" />
            <button className="loginBtn" type="submit" onClick={this.submit}>Iniciar sesión</button>
          </form>
          <div className="redirect">
              <span>¿No tienes una cuenta?</span><a href="google.com">Registrate</a>
          </div>
          <div className="redirect">
              <span>¿Probelmas para iniciar sesión</span><a href="google.com">Reiniciar contraseña</a>
          </div>
        </div>
        <div className="powerby">
            <span>Power by</span><img src={Aws} alt="" width="30px"/>
        </div>
      </div>
    );
  }
}
