import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/landing/Landing';
import Projects from './pages/projects/Projects';
import AboutMe from './pages/aboutme/AboutMe';
import Nav from  './components/nav/Nav';
// import Highway from '@dogstudio/highway';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path='/' component={Landing} />
        <div className="landing">
          <Switch>
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/aboutme' component={AboutMe} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
