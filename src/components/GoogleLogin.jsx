import React, { Component } from "react";
import googlelogo from "./googlelogo.svg"


export default class GoogleLogin extends Component {
  render() {
    return (
      
        <div className="buttonSocial google">
          <img src={googlelogo} alt="Logo google" width="17px" height="17px" />
          <span>Google</span>
        </div>
     
    );
  }
}
