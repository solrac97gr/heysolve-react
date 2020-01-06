import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faStar,
  faMapMarkerAlt,
  faUser,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Tecnicans from "./pages/Tecnicans";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faStar,
  faMapMarkerAlt,
  faUser,
  faPhone
);
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/iniciar-sesion" component={Login} />
          <Route exact path="/registrate" component={Register} />
          <Route exact path="/tecnicos" component={Tecnicans} />
          <Route exact path="/contacto" component={Contacto} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
