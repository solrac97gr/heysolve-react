import React, { Component } from "react";
import facebooklogo from "./facebooklogo.svg"
export default class FacebookLogin extends Component {
  render() {
    return (
      
        <div className="buttonSocial facebook">
          <img src={facebooklogo} alt="Logo facebook" width="17px" />
          <span>Facebook</span>
        </div>
     
    );
  }
}
