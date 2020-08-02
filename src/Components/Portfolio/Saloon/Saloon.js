import React from 'react'
import { Link } from 'react-router-dom'

import Saloon1 from './Saloon 1.jpeg'
import Saloon2 from './Saloon 2.jpeg'
import Saloon3 from './Saloon3.jpeg'

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import './Saloon.css'

function Saloon() {
  return (
    <div className="saloon">
      <Header />
      <div className="saloon-content">
        <div className="saloon-text">
          Saloon
        </div>
        <div className="saloon-images">
          <div className="images">
            <img className="image" src={Saloon1} alt="saloon-img1" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={Saloon2} alt="saloon-img2" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={Saloon3} alt="saloon-img3" height="300" width="400"></img>
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

export default Saloon
