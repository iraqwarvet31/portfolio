import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";



class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    return (

      <div>
        <nav className="nav-wrapper">
          <ul className="nav_links">
            <Link
              activeClass="active"
              to="home" spy={true}
              smooth={true}
              duration={500}
            >
              <li>HOME</li>
            </Link>
            <Link
              activeClass="active"
              to="about" spy={true}
              smooth={true}
              duration={500}
            >
              <li>ABOUT</li>
            </Link>
            <Link
              activeClass="active"
              to="portfolio" spy={true}
              smooth={true}
              duration={500}
            >
              <li>PORTFOLIO</li>
            </Link>
            <Link
              activeClass="active"
              to="blog" spy={true}
              smooth={true}
              duration={500}
            >
              <li>BLOG</li>
            </Link>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;