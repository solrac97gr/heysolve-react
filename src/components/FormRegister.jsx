import React, { Component } from "react";

export default class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordconfirm:"",
      error: ""
    };
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handlePassConfirmChange=this.handlePassConfirmChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }
  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.email) {
      return this.setState({ error: "Ingrese un email valido" });
    }

    if (!this.state.password) {
      return this.setState({ error: "La contraseña no es correcta" });
    }
   
    return this.setState({ error: "" });
  }

  handleUserChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePassChange(event) {
    this.setState({
      password: event.target.value
    });
  }
  handlePassConfirmChange(event){
      this.setState(
          {passwordconfirm:event.target.value}
      );
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.error && (
          <button onClick={this.dismissError}>
            <button onClick={this.dismissError}>✖</button>
            {this.state.error}
          </button>
        )}
        <span className="formTitle">Ingresa con tus datos</span>
        <span className="formGuide">Ingresa tu correo</span>
        <input
          value={this.state.email}
          onChange={this.handleUserChange}
          type="email"
          placeholder="example@correo.com"
          required
        />
        <span className="formGuide">Ingresa tu contraseña</span>
        <input
          value={this.state.password}
          onChange={this.handlePassChange}
          type="password"
          placeholder="Su contraseña debe tener 8 dígitos"
        />
        
        <span className="formGuide">Repite tu contraseña</span>
        <input
          value={this.state.passwordconfirm}
          onChange={this.handlePassChange}
          type="password"
          placeholder="Sus contraseñas deben coincidir"
        />
        <button className="loginBtn" type="submit" onClick={this.submit}>
           Registrate
        </button>
      </form>
    );
  }
}
