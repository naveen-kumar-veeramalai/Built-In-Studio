import React from 'react'
import { Link } from 'react-router-dom'

import RowHouseImg1 from './Row House 001.jpeg'
import RowHouseImg2 from './Row House 002.jpeg'
import RowHouseImg3 from './Row House Chengalpattu.jpeg'
import RowHouseImg4 from './Row House Chengalpattu 1.jpeg'
import RowHouseImg5 from './Row House Chengalpattu 2.jpeg'

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import './RowHouse1.css'

function RowHouse1() {
  return (
    <div className="rowhouse1">
      <Header />
      <div className="rowhouse1-content">
        <div className="rowhouse1-text">
          Residential Row House
        </div>
        <div className="rowhouse1-details">
          <span className="rowhouse1-details-heading">Concept:</span>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;Row houses are designed to create symentic arangement and create unity among the spaces.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;A type of housing that perfectly illustrates conditions of over crowding, 
            lack of light and air and open space,
            architectural monotony and other environmental defects.
          </div><br />
          <span className="rowhouse1-details-heading">Design Features:</span>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;Children's play away from the car and traffic by easily supervised from and 
            accessible to house, particularly kitchen.
            Adult sitting, eating, entertaining, etc.,
            Gardening, outdoor work and outdoor storage.
            Clothes drying and rubbish convient to house but as much out of sight as possible.
            The design and amount of planting and other outside work done.
          </div>
        </div>
        <div className="rowhouse1-images">
          <div className="images">
            <img className="image" src={ RowHouseImg1 } alt="rowhouse1-img1" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={ RowHouseImg2 } alt="rowhouse1-img2" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={ RowHouseImg3 } alt="rowhouse1-img3" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={ RowHouseImg4 } alt="rowhouse1-img4" height="300" width="400"></img>
          </div>
          <div className="images">
            <img className="image" src={ RowHouseImg5 } alt="rowhouse1-img5" height="300" width="400"></img>
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

export default RowHouse1
