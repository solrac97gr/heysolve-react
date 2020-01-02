import React from "react";
import { connect } from "react-redux";
import '../styles/home.css'

/* Componentes */
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Footer from '../components/Footter'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, null)(Home);
