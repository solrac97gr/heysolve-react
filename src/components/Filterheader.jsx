import React, { Component } from "react";
import "../styles/filterheader.css";
import TitleSubtitle from "./TitleSubtitle";
import Filter from './Filter';

export default class Filterheader extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  componentDidMount(){
    
  }
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
