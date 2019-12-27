import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "../actions";

import "../styles/tecniccard.css";

const TecnicCard = (props) => {
  const {
    id,
    name,
    office,
    stars,
    location,
    opinions,
    works,
    imageUrl
  } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      name,
      office,
      stars,
      location,
      opinions,
      works,
      imageUrl
    });
  };

  return (
    <div>
      <div className="cardTec">
        <div className="tecnicAdchivemnts">
          <picture>
            <img className="profilePicture" src={props.imageUrl} alt="" />
          </picture>

          <div className="infoTec">
            <FontAwesomeIcon icon="map-marker-alt" color="#2A4468" />
            <span> {props.location}</span>
          </div>
          <div className="infoTec">
            <span className="infoTecCant"> {props.opinions} </span>
            <span>Opiniones</span>
          </div>
          <div className="infoTec">
            <span className="infoTecCant"> {props.works}</span>
            <span> Trabajos</span>
          </div>
        </div>
        <div className="tecnicInfor">
          <span className="tecnicName">{props.name}</span>
          <span className="tecnicWork"> {props.work}</span>
          <div className="stars">
            <FontAwesomeIcon icon="star" color="yellow" />
            <FontAwesomeIcon icon="star" color="yellow" />
            <FontAwesomeIcon icon="star" color="yellow" />
            <FontAwesomeIcon icon="star" color="yellow" />
            <FontAwesomeIcon icon="star" color="yellow" />
          </div>
          <button onClick={handleSetFavorite} className="profileBtn">
            <span>Agregar a favoritos </span>
            <FontAwesomeIcon icon="star" color="#42a7e5" />
          </button>
          <button className="contactBtn">
            <span>Contactar </span>
            <FontAwesomeIcon icon="phone" color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(TecnicCard);
