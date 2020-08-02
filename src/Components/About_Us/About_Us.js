import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './About_Us.css'

function AboutUs() {
  return (
    <div className="about-us">
      <Header />
      <div className="about-us-content">
        <div className="about-us-text">
          About Us
        </div>
        <div className="about-us-details">
          <span className="about-us-details-heading">Building great offices of the world.</span>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;Builtin Studio is one of the most forward thinking and well equipped design and build consultancy in 
            India with our office located in Chennai . Builtin provides the international experience which is required 
            in the design solutions available today, albeit without leaving out local expertise.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Offering smooth transition along the entire journey ranging from design to build. Builtin persistently tries 
            to customize and transform a space, with efficient time management and cost
            under run strategies. With architects, designers and project managers having global expertise as well as 
            versed with local proficiency, the studio’s design process is characterized by teamwork and intensive collaborative 
            exchange, resulting in projects that reveal a conceptual clarity and are crafted with a meticulous attention to detail.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;We offer design strategy services to the Corporate and Commercial , Residential & Institution sectors. 
            We intend to grow to be the backbone of design in India and contribute to its fullest. Thinking out-of-the-box 
            and deploying strategies that are reinforced by impeccable delivery systems and state-of-the-art designs.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Given our reputation and standing in the marketplace for office interior design and fit-out services, 
            it is vitally important to us that we understand your workplace, its design and space requirements. 
            Therefore we spend a considerable amount of time discussing your business needs and how we will be 
            able to achieve the results you are looking for.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;BuiltIn Studio brings state-of-the-art design concepts to Office Interior & incorporating the best 
            practices in Green Building concepts.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
