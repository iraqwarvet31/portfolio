import React from 'react';
import styles from '../../navbar.module.css'
import { Link } from "react-scroll";

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    return (
      <div>
        <nav className={styles.navWrapper}>
          <ul className={styles.navLinks}>
            <Link
              activeClass="active"
              to="home" spy={true}
              smooth={true}
              duration={250}
            >
              <li>HOME</li>
            </Link>
            <Link
              activeClass="active"
              to="about" spy={true}
              smooth={true}
              duration={250}
            >
              <li>ABOUT</li>
            </Link>
            <Link
              activeClass="active"
              to="portfolio" spy={true}
              smooth={true}
              duration={250}
            >
              <li>PORTFOLIO</li>
            </Link>
            <Link
              activeClass="active"
              to="blog" spy={true}
              smooth={true}
              duration={250}
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