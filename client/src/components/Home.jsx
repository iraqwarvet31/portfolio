import React from 'react';

import Particles from 'react-particles-js';
import ParticlesOptions from '../../particles.json'

const Home = (props) => (
  <div className="home">
    <div className="flex">
      <div className="text">
        Hello, I'm
        <span className="highlight">Larry Olguin</span>
        <br />
        I'm a full-stack web developer
      </div>
    </div>
    <Particles
      params={ParticlesOptions}
    />
  </div>
)


export default Home;