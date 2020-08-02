import React from 'react'
import { Link } from 'react-router-dom'

import IntroductoryImg from './Introductory_img.jpeg'

import './Body.css'

function Body() {
  return (
    <div className="body-content">
      <div className="body-intro">
        <div className="body-intro-prop">Architecture Designer</div>
        <div className="body-intro-prop">Interior Designer</div>
        <div className="body-intro-prop">Landscaping</div>
        <div className="body-intro-prop">Engineering</div>
      </div>
      <div className="body-intro-2">
        <div className="body-intro-heading">
          We, in a few words
        </div>
        <div className="body-intro-img">
          <img 
            src={ IntroductoryImg } 
            alt="introductory img" 
            height="400" 
            width="500" 
          ></img>
        </div>
        <div className="body-intro-2-1">
          <div className="body-intro-text">
            Our architectural journey so far has been all about finding the perfect comfort space for every customer.
            We are inspired by nature oriented designs and drwn towards sustainable design features.
            We are self motivated and are in a constant competition to better ourself in every scenario of our approach.
          </div>
          <Link className="read-more-link" to="/about-us">
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Body
