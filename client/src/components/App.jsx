import React from 'react';

import Home from './Home.jsx';
import Navbar from './Navbar.jsx';

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
        <Navbar />
      </div>
    )
  }
}

export default App;