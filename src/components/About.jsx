import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutContent">
      <h2 className="aboutTitle">
          Sobre nosotros.
      </h2>
      <span>
        Somos una comunidad de técnicos para los servicios básicos del hogar. Si
        tienes algún problema técnico en tu casa, oficina u empresa no dudes en
        contactarnos y dejarlo en nuestras manos. Nuestros Solvers estarán
        listos para arreglarlo.
      </span>
      </div>
      <div>
        <img className="aboutImage" src="https://pngimage.net/wp-content/uploads/2018/06/technician-png-3.png" alt=""/>
      </div>
      
    </div>
  );
}
