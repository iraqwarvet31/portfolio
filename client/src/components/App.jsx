import React from 'react';

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
        <Home />
        <About />
        <Portfolio />
        <Blog />
      </div>
    )
  }
}

export default App;