import React from 'react'
import { Link } from 'react-router-dom'

import logo from './Built_In_Studio_logo.jpg'
import './Header.css'

function Header() {
  return (
    <div className="header-content">
      <Link className="application-title application-title-route" to="/">
        <img src={logo} alt="Built In Studio" width="150" height="88"></img>
      </Link>
      <Link className="navigation-title navigation-title-route" to="/about-us">
        About us
      </Link>
      <Link className="navigation-title navigation-title-route" to="/portfolio">
        Portfolio
      </Link>
      <Link className="navigation-title navigation-title-route" to="/contact-us">
        Contact us
      </Link>
    </div>
  )
}

export default Header