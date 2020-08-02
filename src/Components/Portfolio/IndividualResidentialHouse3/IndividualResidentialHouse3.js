import React from 'react'
import { Link } from 'react-router-dom'

import IndividualHouse11 from './individual_house_11.jpg'
import IndividualHouse12 from './individual_house_12.jpg'
import IndividualHouse13 from './individual_house_13.jpg'
import IndividualHouse14 from './individual_house_14.jpg'
import IndividualHouse15 from './individual_house_15.jpg'

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import './IndividualHouse3.css'

function IndividualResidentialHouse3() {
  return (
    <div className="individualhouse3">
      <Header />
      <div className="individualhouse3-content">
        <div className="individualhouse3-text">
          Individual Residential House 3
        </div>
        <div className="individualhouse3-images">
          <div className="images">
            <img className="image" src={IndividualHouse11} alt="individualhouse3-img1" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse12} alt="individualhouse3-img2" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse13} alt="individualhouse3-img3" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse14} alt="individualhouse3-img4" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse15} alt="individualhouse3-img5" height="300" width="400"></img>
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

export default IndividualResidentialHouse3
