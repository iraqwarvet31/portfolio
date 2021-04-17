import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import Particles from 'react-particles-js';
import ParticlesOptions from '../../particles.json'

const Home = ({showNavbar}) => {

  return (
    <div className="home">
      <div className="flex">
        <div className="text">
          <span>Hello, I'm</span>
          <span className="highlight"> Larry Olguin.</span>
          <br />
          <span>I'm a full-stack web developer.</span>
        </div>
        <Link
          activeClass="active"
          to="about" spy={true}
          smooth={true}
          duration={500}
        >
          <button className="btn-home">
            View my work
            <i className="fas fa-arrow-right"></i>
          </button>
        </Link>
      </div>
      <Particles
        params={ParticlesOptions}
      />
    </div>
  )
}


export default Home;