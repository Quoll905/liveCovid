import React from 'react';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Home from './Pages/Home'
import Fonti from './Pages/Fonti'
import FalsiMiti from './Pages/FalsiMiti'
import Navbar from './Componenti/NavMenu/Navbar'
import Donazioni from './Pages/Donazioni';
import Footer from './Componenti/Footer/Footer';
import SituazioneGenerale from './Pages/SituazioneGenerale';

import './App.css';



const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/situazioneGenerale' component={SituazioneGenerale} exact />
          <Route path="/fonti" component={Fonti} exact />
          <Route path='/miti' component={FalsiMiti} exact />
          <Route path='/donate' component={Donazioni} exact />
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
