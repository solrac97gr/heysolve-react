import React, { Component } from "react";

export default class FormLogin extends Component {
  render() {
    return (
      <form action="submit">
        <span className="formTitle">Ingresa con tus datos</span>
        <span className="formGuide">Ingresa tu correo</span>
        <input type="text" placeholder="example@correo.com" />
        <span className="formGuide">Ingresa tu contraseña</span>
        <input type="text" placeholder="Su contraseña debe tener 8 dígitos" />
        <button className="loginBtn" type="submit" onClick={this.submit}>
          Iniciar sesión
        </button>
      </form>
    );
  }
}
