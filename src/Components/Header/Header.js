import React from 'react'
import { Link } from 'react-router-dom'

// import logo from './Built_In_Studio_logo.jpg'
import './Header.css'

function Header() {
    return (
        <div className="header-content">
            <div className="application-title">
                <Link className="application-title-route" to="/"><img alt="Built In Studio"></img></Link>
            </div>
            <Link to="/about-us">About us</Link>
        </div>
    )
}

export default Header