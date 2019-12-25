import React, { Component } from "react";
import TecnicansList from "../components/TecnicanList";
import FilterHeader from "../components/Filterheader";

export default class Tecnicans extends Component {
  render() {
    return (
      <div>
        <FilterHeader />
        <TecnicansList />
      </div>
    );
  }
}
