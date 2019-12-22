import React, { Component } from "react";
import Aws from "../static/images/aws.png";
export default class Powerby extends Component {
  render() {
    return (
      <div className="powerby">
        <span>Power by</span>
        <img src={Aws} alt="" width="30px" />
      </div>
    );
  }
}
