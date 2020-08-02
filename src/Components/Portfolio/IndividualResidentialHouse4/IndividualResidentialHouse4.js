import React from 'react'
import { Link } from 'react-router-dom'

import IndividualHouse16 from './individual_house_16.jpg'
import IndividualHouse17 from './individual_house_17.jpg'
import IndividualHouse18 from './individual_house_18.jpg'
import IndividualHouse19 from './individual_house_19.jpg'
import IndividualHouse20 from './individual_house_20.jpeg'

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import './IndividualHouse4.css'

function IndividualResidentialHouse4() {
  return (
    <div className="individualhouse4">
      <Header />
      <div className="individualhouse4-content">
        <div className="individualhouse4-text">
          Individual Residential House 4
        </div>
        <div className="individualhouse4-images">
          <div className="images">
            <img className="image" src={IndividualHouse16} alt="individualhouse4-img1" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse17} alt="individualhouse4-img2" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse18} alt="individualhouse4-img3" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse19} alt="individualhouse4-img4" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse20} alt="individualhouse4-img5" height="300" width="400"></img>
          </div>
        </div>
        <div className="back-button">
          <Link className="back-button-route" to="/portfolio">
            Back
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndividualResidentialHouse4
