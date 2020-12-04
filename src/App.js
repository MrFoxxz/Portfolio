import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

//Components
import Homepage from './components/homepage/homepage';
import Portfolio from './components/portfolio/portfolio';
import Contacts from './components/contacts/contacts';
import AboutMe from './components/aboutme/aboutme';
import Allies from './components/Allies/allies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contacts" component={Contacts} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Allies" component={Allies} />
      </BrowserRouter>
    </div>
  );
}

export default App;
