import React from "react";
import { connect } from "react-redux";
import "../styles/home.css";
import { Helmet } from "react-helmet";
/* Componentes */
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footter";
import About from "../components/About";
import Why from "../components/Why";
import Services from "../components/Services";

const Home = () => {
  return (
    <React.Fragment>
      <MetaTags />
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Services />
      <Footer />
    </React.Fragment>
  );
};

const MetaTags = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>HeySolve | Técnicos a domicilio en lima</title>
    </Helmet>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, null)(Home);
