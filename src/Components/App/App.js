import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import HomePage from '../Home_Page/Home_Page';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
