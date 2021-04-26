import React from 'react';
import styles from '../../home.module.css'
import { Link, animateScroll as scroll } from "react-scroll";

import Particles from 'react-particles-js';
import ParticlesOptions from '../../particles.json'

const Home = ({showNavbar}) => {

  return (
    <div id="home" className={styles.home}>
      <div className={styles.position}>
        <div className={styles.text}>
          <span>Hello, I'm</span>
          <span className={styles.highlight}> Larry Olguin.</span>
          <br />
          <span>I'm a full-stack web developer.</span>
        </div>
        <Link
          activeClass="active"
          to="about" spy={true}
          smooth={true}
          duration={250}
        >
          <button className={styles.btnHome}>
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