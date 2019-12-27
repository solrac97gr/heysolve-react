import React from "react";
import { connect } from "react-redux";
import TecnicCard from "./TecnicCard";
import '../styles/tecnicanlist.css'

const TecnicanList = ({ tecnics,favoritesTecnics }) => {
  return (
    <div className="containerTecnicans">
      {tecnics.map((tecnic) => (
        <TecnicCard
          key={tecnic.id}
          name={tecnic.name}
          work={tecnic.office}
          stars={tecnic.stars}
          location={tecnic.location}
          opinions={tecnic.opinions}
          works={tecnic.works}
          imageUrl={tecnic.imageUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tecnics: state.tecnics,
    favoritesTecnics:state.favoritesTecnics
  };
};

export default connect(mapStateToProps, null)(TecnicanList);
