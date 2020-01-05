import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <div className="heroContainer">
      <span className="TitleHero">Lo que necesites arreglar, lo haremos por ti.</span>
      <h1 className="seoTitle">Servicios de técnicos a domicilio en Lima</h1>
      <button className="btnContactar">Contactar técnico</button>
    </div>
  );
}
