import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/tecniccard.css";
export default class TecnicCard extends Component {
  render() {
    return (
      <div className="cardTec">
        <div className="tecnicAdchivemnts">
          <picture>
            <img className="profilePicture" src={this.props.imageUrl} alt="" />
          </picture>

          <div className="infoTec">
            <FontAwesomeIcon icon="map-marker-alt" color="#2A4468" />
            <span> {this.props.location}</span>
          </div>
          <div className="infoTec">
            <span className="infoTecCant"> {this.props.opinions} </span>
            <span>Opiniones</span>
          </div>
          <div className="infoTec">
            <span className="infoTecCant"> {this.props.works}</span>
            <span> Trabajos</span>
          </div>
        </div>
        <div className="tecnicInfor">
          <span className="tecnicName">{this.props.name}</span>
          <span className="tecnicWork"> {this.props.work}</span>
          <div className="stars">
            <FontAwesomeIcon icon="star" color="yellow" />
            <FontAwesomeIcon icon="star" color="yellow" />
            <FontAwesomeIcon icon="star" color="yellow" />
            <FontAwesomeIcon icon="star" color="yellow" />
            <FontAwesomeIcon icon="star" color="yellow" />
          </div>
          <button className="profileBtn">
            <span>Ver perfil </span>
            <FontAwesomeIcon icon="user" color="#42a7e5" />
          </button>
          <button className="contactBtn">
             <span>Contactar </span>
             <FontAwesomeIcon icon="phone" color="white" />
            </button>
        </div>
      </div>
    );
  }
}
