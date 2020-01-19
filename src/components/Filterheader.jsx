import React from "react";
import "../styles/filterheader.css";
import TitleSubtitle from "./TitleSubtitle";
import {Filter} from './Filter';


export const Filterheader = () => {
  return (
    <div className="containerheader">
        <TitleSubtitle
          title={"Servicios"}
          subtitle={"filtra segun lo que necesitas"}
        />
        <Filter/>
      </div>
  )
}
