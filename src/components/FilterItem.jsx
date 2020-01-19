import React, { Component } from "react";

export default class FilterItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    return <div className=" filterItem">{this.props.name || "Filtro"}</div>;
  }
}
