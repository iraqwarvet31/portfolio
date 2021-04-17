import React from 'react';

import Navbar from './Navbar.jsx'

const About = (props) => {
  console.log('ran')
  return (
    <div className="about">
      <div className="container">
        <h1>About page</h1>
        <div className="skills-container">
          <div className="skill-container">
            <div className="icon-container">
              <span class="iconify" data-icon="mdi-speedometer" data-inline="false"></span>
            </div>
            <div className="text-container">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;