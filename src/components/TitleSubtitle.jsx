import React, { Component } from "react";
import "../styles/template.css";
export default class TitleSubtitle extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="pageTitle">{this.props.title}</h1>
        <span className="pageSubtitle">{this.props.subtitle}</span>
      </div>
    );
  }
}
