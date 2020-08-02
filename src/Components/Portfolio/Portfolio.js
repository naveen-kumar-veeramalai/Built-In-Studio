import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import RowHouse1 from './RowHouse1/Row House 001.jpeg'
import IndividualHouse1 from './IndividualResidentialHouse1/individual_house_1.jpeg'
import IndividualHouse2 from './IndividualResidentialHouse2/individual_house_7.jpg'
import IndividualHouse3 from './IndividualResidentialHouse3/individual_house_11.jpg'
import IndividualHouse4 from './IndividualResidentialHouse4/individual_house_20.jpeg'
import Saloon from './Saloon/Saloon 1.jpeg'

import './Portfolio.css'

function Portfolio() {
  return (
    <div className="portfolio">
      <Header />
      <div className="portfolio-content">
        <div className="portfolio-text">
          Portfolio
        </div>
        <div className="portfolio-details">
          <Link to="/rowHouse1">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ RowHouse1 } alt="row_house_1" height="300" width="300"></img>
                </div>
                <div className="flip-card-back">
                  <span>Residentail Row House</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="individualHouse1">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ IndividualHouse1 } alt="row_house_1" height="300" width="300"></img>
                </div>
                <div className="flip-card-back">
                  <span>Individual Residentail House 1</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="individualHouse2">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ IndividualHouse2 } alt="row_house_1" height="300" width="300"></img>
                </div>
                <div className="flip-card-back">
                  <span>Individual Residentail House 2</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="individualHouse3">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ IndividualHouse3 } alt="row_house_1" height="300" width="300"></img>
                </div>
                <div className="flip-card-back">
                  <span>Individual Residentail House 3</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="individualHouse4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ IndividualHouse4 } alt="row_house_1" height="300" width="300"></img>
                </div>
                <div className="flip-card-back">
                  <span>Individual Residentail House 4</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="saloon">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ Saloon } alt="row_house_1" height="300" width="300"></img>
                </div>
                <div className="flip-card-back">
                  <span>Saloon</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
