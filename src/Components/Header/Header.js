import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="application-title">
                <Link className="application-title-route" to="/">Built In Studio</Link>
            </div>
            Header component
        </div>
    )
}

export default Header