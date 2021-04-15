import React from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

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
      <div style={styles.app}>
        <Switch>
          <Home />
          <Route exact component={About} />
        </Switch>
      </div>
    )
  }
}

export default App;