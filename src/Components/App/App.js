import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import HomePage from '../Home_Page/Home_Page';
import AboutUs from '../About_Us/About_Us';

import './App.css';

function App() {
  return (
    <div className="app-content">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about-us" exact component={AboutUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
