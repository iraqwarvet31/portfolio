import React from 'react';
import styles from './navbar.module.css'
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
              activeClass={`active ${styles.activeLink}`}
              to="home" spy={true}
              smooth={true}
              duration={250}
              className={styles.link}
            >
              HOME
            </Link>
            <Link
              activeClass={`active ${styles.activeLink}`}
              to="about" spy={true}
              smooth={true}
              duration={250}
              className={styles.link}
            >
              ABOUT
            </Link>
            <Link
              activeClass={`active ${styles.activeLink}`}
              to="portfolio" spy={true}
              smooth={true}
              duration={250}
              className={styles.link}
            >
              PORTFOLIO
            </Link>
            <Link
              activeClass={`active ${styles.activeLink}`}
              to="contact" spy={true}
              smooth={true}
              duration={250}
              className={styles.link}
            >
              CONTACT
            </Link>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;