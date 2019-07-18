import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/landing/Landing';
import AboutMe from './pages/aboutme/AboutMe';
import Nav from  './components/nav/Nav';


function App() {
  return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/aboutme' component={AboutMe} />
          </Switch>
          </div>
      </Router>
  );
}

export default App;
