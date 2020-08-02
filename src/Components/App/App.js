import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import HomePage from '../Home_Page/Home_Page';
import AboutUs from '../About_Us/About_Us';
import Portfolio from '../Portfolio/Portfolio';
import RowHouse1 from '../Portfolio/RowHouse1/RowHouse1'
import IndividualResidentialHouse1 from '../Portfolio/IndividualResidentialHouse1/IndividualResidentialHouse1'
import IndividualResidentialHouse2 from '../Portfolio/IndividualResidentialHouse2/IndividualResidentialHouse2'
import IndividualResidentialHouse3 from '../Portfolio/IndividualResidentialHouse3/IndividualResidentialHouse3'
import IndividualResidentialHouse4 from '../Portfolio/IndividualResidentialHouse4/IndividualResidentialHouse4'
import Saloon from '../Portfolio/Saloon/Saloon'
import ContactUs from '../Contact_Us/Contact_Us'

import './App.css';

function App() {
  return (
    <div className="app-content">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/rowHouse1" exact component={RowHouse1} />
          <Route path="/individualHouse1" exact component={IndividualResidentialHouse1} />
          <Route path="/individualHouse2" exact component={IndividualResidentialHouse2} />
          <Route path="/individualHouse3" exact component={IndividualResidentialHouse3} />
          <Route path="/individualHouse4" exact component={IndividualResidentialHouse4} />
          <Route path="/saloon" exact component={Saloon} />
          <Route path="/contact-us" exact component={ContactUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
