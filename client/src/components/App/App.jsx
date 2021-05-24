import React from 'react';
import ReactGA from 'react-ga'; //Google Analytics
import {Link, animateScroll as scroll} from 'react-scroll';

import Home from '../Home/Home.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import About from '../About/About.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Contact from '../Contact/Contact.jsx';
import Modal from '../Modal/Modal.jsx';
import Project from '../Project/Project.jsx'
import projectData from '../../../projectData.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      activeProject: null,
    }
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    ReactGA.initialize('2619161658');
    ReactGA.pageview('/');
  }

  showModal(e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      modal: true,
      activeProject: e.target.name,
    });
  }

  closeModal() {
    this.setState({ modal: false })
  }

  render() {

    return (
      <div>
        <Navbar />
        <Home
          title="View my work"
          id="home"
          showNavbar={this.showNavbar}
        />
        <About
          title="About me"
          id="about"
        />
        <Portfolio
          title="My projects"
          id="styles.portfolio"
          showModal={this.showModal}
        />
        <Contact
          title="Contact form"
          id="contact"
        />
        <Modal show={this.state.modal} closeModal={ e => this.closeModal(e) }>
          {
            this.state.modal
            ? <Project projectData={projectData} activeProject={this.state.activeProject} />
            : null
          }
        </Modal>
      </div>
    )
  }
}

export default App;