import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Blog from './Blog.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Home
          title="View my work"
          id="home"
        />
        <About
          title="About me"
          id="about"
        />
        <Portfolio />
        <Blog />
      </div>
    )
  }
}

export default App;