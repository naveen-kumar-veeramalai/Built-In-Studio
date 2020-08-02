import React from 'react';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './Contact_Us.css'

function ContactUS() {
  return (
    <div className="contact-us">
      <Header />
      <div className="contact-us-content">
        <div className="contact-us-text">
          Contact Us
        </div>
        <div className="contact-us-details">
          <div className="contact-us-details-address">
            Address: 140/57 A, E.S.I. Main Road,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salem camp (Po.),<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mettur (T.K.),<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salem (Dt.),<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tamil Nadu - 636456
          </div>
          <div className="contact-us-details-number">
            Contact: +91 97871 70724<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 80726 64277<br />
            Mail: builtinstudioo@gmail.com<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mhameethkhan@gmail.com
          </div>
        </div>
      </div>
      <Footer />
    </div>      
  )
}

export default ContactUS
