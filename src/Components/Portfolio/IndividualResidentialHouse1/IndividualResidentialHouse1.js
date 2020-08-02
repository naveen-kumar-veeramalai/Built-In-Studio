import React from 'react'
import { Link } from 'react-router-dom'

import IndividualHouse1 from './individual_house_1.jpeg'
import IndividualHouse2 from './individual_house_2.jpeg'
import IndividualHouse3 from './individual_house_3.jpg'
import IndividualHouse4 from './individual_house_4.jpg'
import IndividualHouse5 from './individual_house_5.jpg'
import IndividualHouse6 from './individual_house_6.jpeg'

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import './IndividualHouse1.css'

function IndividualResidentialHouse1() {
  return (
    <div className="individualhouse1">
      <Header />
      <div className="individualhouse1-content">
        <div className="individualhouse1-text">
          Individual Residential House 1
        </div>
        <div className="individualhouse1-images">
          <div className="images">
            <img className="image" src={IndividualHouse1} alt="individualhouse1-img1" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse2} alt="individualhouse1-img2" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse3} alt="individualhouse1-img3" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse4} alt="individualhouse1-img4" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse5} alt="individualhouse1-img5" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={IndividualHouse6} alt="individualhouse1-img6" height="300" width="400"></img>
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

export default IndividualResidentialHouse1
