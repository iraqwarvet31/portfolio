import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Blog from './Blog.jsx';
import Modal from './Modal.jsx';
import Project from './Project.jsx'
import projectData from '../../projectData.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
    }
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ modal: true });
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
        <Blog
          title="My articles"
          id="blog"
        />
        <Modal show={ this.state.modal } closeModal={ e => this.closeModal(e) }>
          <Project projectData={projectData} />
        </Modal>
      </div>
    )
  }
}

export default App;