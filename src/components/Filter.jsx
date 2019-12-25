import React, { Component } from "react";
import "../styles/filter.css";
import FilterItem from "./FilterItem";
export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filters:[]
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        filters: [
          {
            name: "Todos",
            isActive: false
          },
          {
            name: "Carpi",
            isActive: false
          },
          {
            name: "Cerra",
            isActive: false
          },
          {
            name: "Pintu",
            isActive: false
          },
          {
            name: "Electri",
            isActive: false
          }
        ]
      });
    }, 100);
  }

  render() {
    return (
      <div className="filterContainer">
        {this.state.filters.map((filter) => (
          <FilterItem name={filter.name} />
        ))}
      </div>
    );
  }
}
