import React from 'react';

import Navbar from './Navbar.jsx'

const About = (props) => {
  console.log('ran')
  return (
    <div className="about">
      <Navbar />
      <h1>About page</h1>
    </div>
  )
}

export default About;