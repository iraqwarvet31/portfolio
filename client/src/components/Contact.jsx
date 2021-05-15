import React, { useState } from 'react';
import axios from 'axios';
import { Link, animateScroll as scroll } from "react-scroll";
import styles from '../../contact.module.css';

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
      status: 'Submit',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const field = e.target.id;

    if (field === 'name') {
      this.setState({ name: e.target.value })
    } else if (field === 'email') {
      this.setState({ email: e.target.value})
    } else {
      this.setState({ message: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ status: "Sending" });

    axios({
      method: "POST",
      url: "http://localhost:3000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'sent') {
        alert('Message Sent');
        this.setState({ name: '', email: '', message: '', status: 'Submit'})
      } else if (response.data.status === 'failed') {
        alert('Message Failed');
      }
    });
  }

  render() {

    return (
      <div className={styles.wrapper}>
        <div id="contact" className={styles.contact}>
          <div className={styles.container}>
            <h1>CONTACT</h1>
            <hr className={styles.heading} />
            <h5>Have a question?</h5>
            <div className={styles.form_container} method="POST">
              <form onSubmit={this.handleSubmit}>
                <div className={`${styles.form_group} form-group ${styles.input_container}`}>
                  <label htmlFor="exampleFormControlInput1" />
                  <input
                    type="text"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className={`${styles.form_group} form-group ${styles.input_container}`}>
                  <label htmlFor="exampleFormControlInput1" />
                  <input
                    type="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className={`${styles.form_group} form-group`}>
                  <label htmlFor="exampleFormControlTextarea1" />
                  <textarea
                    id="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Type your message"
                    rows="10"
                  />
                </div>
                <button className={styles.btnSubmit} type="Submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
          <footer className={styles.footer}>
            <Link
              activeClass="active"
              to="home" spy={true}
              smooth={true}
              duration={500}
            >
              <a href="#">
                <span className={`iconify ${styles.top_icon}`} data-icon="ant-design:arrow-up-outlined" data-inline="false"></span>
              </a>
            </Link>
            <div className={styles.ghost_container}></div>
            <div className={styles.icon_wrap}>
              <a href="https://www.linkedin.com/in/larryolguin/" target="_blank">
                <div className={styles.icon_container}>
                  <span
                    className={`${styles.icon} iconify`}
                    data-icon="grommet-icons:linkedin-option"
                    data-inline="false"
                  />
                </div>
              </a>
              <a href="https://twitter.com/byteTheBits0101" target="_blank">
                <div className={styles.icon_container}>
                  <span
                    className={`${styles.icon} iconify`}
                    data-icon="simple-icons:twitter"
                    data-inline="false"
                  />
                </div>
              </a>
              <a href="https://www.instagram.com/justadev_/" target="_blank">
                <div className={styles.icon_container}>
                  <span
                    className={`${styles.icon} iconify`}
                    data-icon="brandico:instagram"
                    data-inline="false"
                  />
                </div>
              </a>
              <a href="https://github.com/iraqwarvet31" target="_blank">
                <div className={styles.icon_container}>
                  <span
                    className={`${styles.icon} iconify`}
                    data-icon="akar-icons:github-fill"
                    data-inline="false"
                  />
                </div>
              </a>
            </div>
            <div className={styles.copyright}>Larry Olguin &#169; 2021</div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Contact;