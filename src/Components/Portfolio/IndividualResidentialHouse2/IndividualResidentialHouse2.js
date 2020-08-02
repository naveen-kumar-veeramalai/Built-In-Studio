import React from 'react'
import { Link } from 'react-router-dom'

import IndividualHouse7 from './individual_house_7.jpg'
import IndividualHouse8 from './individual_house_8.jpg'
import IndividualHouse9 from './individual_house_9.jpg'
import IndividualHouse10 from './individual_house_10.jpg'

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import './IndividualHouse2.css'

function IndividualResidentialHouse2() {
  return (
    <div className="individualhouse2">
      <Header />
      <div className="individualhouse2-content">
        <div className="individualhouse2-text">
          Individual Residential House 2
        </div>
        <div className="individualhouse2-images">
          <div className="images">
            <img className="image" src={IndividualHouse7} alt="individualhouse2-img1" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse8} alt="individualhouse2-img2" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse9} alt="individualhouse2-img3" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse10} alt="individualhouse2-img4" height="300" width="400"></img>
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

export default IndividualResidentialHouse2
