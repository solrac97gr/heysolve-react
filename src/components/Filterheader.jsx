import React, { Component } from "react";
import "../styles/filterheader.css";
import TitleSubtitle from "./TitleSubtitle";
import Filter from './Filter';

export default class Filterheader extends Component {
  state = {};
  render() {
    return (
      <div className="containerheader">
        <TitleSubtitle
          title={"Servicios"}
          subtitle={"filtra segun lo que necesitas"}
        />
        <Filter/>
      </div>
    );
  }
}
