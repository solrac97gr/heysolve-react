import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee,faStar,faMapMarkerAlt,faUser,faPhone } from '@fortawesome/free-solid-svg-icons'

import './App.css';

//import Login from './pages/Login'
import Tecnicans from './pages/Tecnicans'
library.add(fab, faCheckSquare, faCoffee,faStar,faMapMarkerAlt,faUser,faPhone)
function App() {
  return (
    <div className="App">
        <Tecnicans/>
    </div>
  );
}

export default App;
