import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div className="nav-wrapper">
        <nav>
          <ul className="nav_links">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">PORTFOLIO</a></li>
            <li><a href="#">BLOG</a></li>
          </ul>
        </nav>
        <hr />
      </div>
    )
  }
}

export default Navbar;