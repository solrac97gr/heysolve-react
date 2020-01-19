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
            name: "Celulares",
            isActive: false
          },
          {
            name: "Computadoras",
            isActive: false
          },
          {
            name: "Iphones",
            isActive: false
          },
          {
            name: "Mac",
            isActive: false
          },
          {
            name: "Xiaomi",
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
