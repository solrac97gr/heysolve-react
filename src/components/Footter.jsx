import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footter() {
  return (
    <div>
      <div className="footerContainer">
        <div>
          <span className="footerTitle">Síguenos</span>
          <div className="socialContainer">
            <a href="https://www.facebook.com/heysolvepe">
              <img
                className="iconSocial"
                src="https://manzanaverde.la/icons/facebook-color.svg"
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/heysolvepe">
              <img
                className="iconSocial"
                src="https://manzanaverde.la/icons/linkedin.svg"
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/heysolvepe">
              <img
                className="iconSocial"
                src="https://manzanaverde.la/icons/instagram.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="sitemapContainer">
          <span className="footerTitle">Enlaces</span>
          <Link to="/" className="sitemapItem">Inicio</Link>
          <Link to="contacto" className="sitemapItem">Contacto</Link>
          <Link to="iniciar-sesion" className="sitemapItem">Iniciar sesión</Link>
          <Link to="registrate"className="sitemapItem">Registrarse</Link>
        </div>
        <div className="contactFooter">
          <span className="footerTitle">Contactanos</span>
          <div>Lima-Perú</div>
          <div className="iconLinkFooter">
            <a href="tel:+51939169253">
              <img src="https://manzanaverde.la/icons/phone.svg" alt="" />
              <span>+51 939 169 253</span>
            </a>
          </div>
          <div className="iconLinkFooter">
            <a href="mailto:info@heysolve.com">
              <img src="https://manzanaverde.la/icons/mail.svg" alt="" />
              <span>info@heysolve.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footerDerechos">
        <span>HeySolve 2020 - Todos los derechos reservados ©</span>
      </div>
    </div>
  );
}
