import React, { Component } from "react";
import Logo from "../static/images/heysolve.jpeg";

export default class LogoCenterSquare extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={Logo} alt="Logo Heysolve" />
      </div>
    );
  }
}
