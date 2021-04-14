import React from 'react';

import Particles from 'react-particles-js';
import ParticlesOptions from '../../particles.json'

const Home = (props) => (
  <div className="home">
    <div className="flex">
      <div className="text">
        <span>Hello, I'm</span>
        <span className="highlight"> Larry Olguin</span>
        <br />
        <span>I'm a full-stack web developer</span>
      </div>
    </div>
    <Particles
      params={ParticlesOptions}
    />
  </div>
)


export default Home;