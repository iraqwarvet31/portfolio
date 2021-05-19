import React, { useState } from 'react';
import axios from 'axios';
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './contact.module.css';

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
      status: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

    axios.post('/contact', this.state)
      .then((response) => {
        if (response.data === 'sent') {
          this.setState({
            name: '',
            email: '',
            message: '',
            status: 'sent',
          })
        } else if (response.data === 'failed') {
          this.setState({
            name: '',
            email: '',
            message: '',
            status: 'failed',
          })
        }
      })
  }

  handleClose(e) {
    e.preventDefault();
    console.log('clicked')
    this.setState({ status: '' });
  }

  render() {
    const renderAlert = () => {
      if (this.state.status === 'sent') {
        return (
          <div className={styles.alert_container} onClick={this.handleClose}>
            <span>Message Sent!</span>
            <span className={`${styles.successAlert} iconify`} data-icon="clarity:success-standard-line" data-inline="false" />
            <span
              class={`${styles.close_icon} iconify`}
              data-icon="ant-design:close-outlined"
              data-inline="false"
              onClick={this.handleClose}
            />
          </div>
        )
      } else if (this.state.status === 'failed') {
        return (
          <div className={styles.alert_container} onClick={this.handleClose}>
            <span>Not Sent!</span>
            <span className={`${styles.failedAlert} iconify`} data-icon="jam:triangle-danger" data-inline="false" />
            <span
              class={`${styles.close_icon} iconify`}
              data-icon="ant-design:close-outlined"
              data-inline="false"
              onClick={this.handleClose}
            />
          </div>
        )
      }
    }
    return (
      <div id="contact" className={styles.wrapper}>
        <div className={styles.contact}>
          <div className={styles.container}>

            <ScrollAnimation animateIn={styles.animate__bounceInLeft}>
              <h1>CONTACT</h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn={`${styles.animate__bounceInLeft} ${styles.delay}`}>
              <hr className={styles.heading} />
            </ScrollAnimation>

              <h5>Have a question?</h5>
            <div className={styles.form_container} method="POST">

              <ScrollAnimation animateIn={`animate__fadeIn ${styles.animate__rubberBand}`}>
                <form onSubmit={this.handleSubmit} autoComplete="off">
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
                {renderAlert()}
              </ScrollAnimation>

            </div>
          </div>

          <footer className={styles.footer}>
            <Link
              activeClass="active"
              to="home" spy={true}
              smooth={true}
              duration={500}
            >
              <span className={`iconify ${styles.top_icon}`} data-icon="ant-design:arrow-up-outlined" data-inline="false"></span>
            </Link>
            <div className={styles.ghost_container}></div>
            <div className={styles.icon_wrap}>
              <a href="https://www.linkedin.com/in/larryolguin" target="_blank">
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
              <a href="https://www.instagram.com/bytethebits0101" target="_blank">
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
            <div className={styles.copyright}>Made with ❤️ by Larry Olguin &#169; 2021</div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Contact;

