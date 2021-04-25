import React, { useState } from 'react';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

import Navbar from './Navbar.jsx'

const About = (props) => {

  return (
    <div className="about">
      <div className="container">
        <h1>ABOUT</h1>
        <hr />
        <div className="skills-container flex">
          <div className="skill-container">
            <ScrollAnimation animateIn="animate__animated animate__flipInY">
              <div className="icon-container">
                <span className="iconify" data-icon="mdi-speedometer" data-inline="false"></span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn">
              <div className="text-container">
                <div className="skill-text-container">
                  Fast
                </div>
                <div className="skill-description-container">
                  <span>Fast load times and lag free</span>
                  <span> interaction, my highest priority.</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="skill-container">
            <ScrollAnimation animateIn="animate__animated animate__flipInY delay-1">
              <div className="icon-container">
                <span className="iconify" data-icon="mdi:cellphone-link" data-inline="false"></span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn delay-1">
              <div className="text-container">
                <div className="skill-text-container">
                  Responsive
                </div>
                <div className="skill-description-container">
                  <span>My layouts will work on any</span>
                  <span> device, big or small.</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="skill-container">
            <ScrollAnimation animateIn="animate__animated animate__flipInY delay-2">
              <div className="icon-container">
                <span className="iconify" data-icon="ic:outline-lightbulb" data-inline="false"></span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn delay-2">
              <div className="text-container">
                <div className="skill-text-container">
                  Intuitive
                </div>
                <div className="skill-description-container">
                  <span>Strong preference for easy to</span>
                  <span> use, intuitive UX/UI</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="skill-container">
            <ScrollAnimation animateIn="animate__animated animate__flipInY delay-3">
              <div className="icon-container">
                <span className="iconify" data-icon="ic:sharp-dynamic-feed" data-inline="false"></span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn delay-3">
              <div className="text-container">
                <div className="skill-text-container">
                  Dynamic
                </div>
                <div className="skill-description-container">
                  <span>Websites don't have to be static, I love</span>
                  <span> making pages come to life.</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="me-container flex">
          <div className="profile-container item">
            <img src="https://portfolioprofile.s3-us-west-1.amazonaws.com/20210418_180012.jpg" />
            <div className="me-header">
              Who's this guy?
            </div>
            <div className="me-text">
              <span>I'm a Software Engineer living in Pismo Beach, CA.</span>
              <span> I have a serious passion for UI effects, animations and creating</span>
              <span> intuitive, dynamic user experiences.</span>
              <br />
              <a href="#"> Let's make something special!</a>
            </div>
          </div>
          <div className="badges-container item">
            <div className="bar">
              <ScrollAnimation animateIn="fill-eighty fill eighty">
                <div>
                  <div className="tag flexSkill">
                    JavaScript
                  </div>
                </div>
              </ScrollAnimation>
              <div className="end-tag flexSkill">
                80%
              </div>
            </div>

            <div className="bar">
              <ScrollAnimation animateIn="fill ninety fill-ninety">
                <div>
                  <div className="tag flexSkill">
                    HTML
                  </div>
                </div>
              </ScrollAnimation>
              <div className="end-tag flexSkill">
                90%
              </div>
            </div>

            <div className="bar">
              <ScrollAnimation animateIn="fill ninety fill-ninety">
                <div>
                  <div className="tag flexSkill">
                    CSS
                  </div>
                </div>
              </ScrollAnimation>
              <div className="end-tag flexSkill">
                90%
              </div>
            </div>

            <div className="bar">
              <ScrollAnimation animateIn="fill eighty fill-eighty">
                <div>
                  <div className="tag flexSkill">
                    React
                  </div>
                </div>
              </ScrollAnimation>
              <div className="end-tag flexSkill">
                80%
              </div>
            </div>

            <div className="bar">
              <ScrollAnimation animateIn="fill seventy fill-seventy">
                <div>
                  <div className="tag flexSkill">
                    Node
                  </div>
                </div>
              </ScrollAnimation>
              <div className="end-tag flexSkill">
                70%
              </div>
            </div>

            <div className="bar">
              <ScrollAnimation animateIn="fill sixty fill-sixty">
                <div>
                  <div className="tag flexSkill">
                    Mocha/Chai
                  </div>
                </div>
              </ScrollAnimation>
              <div className="end-tag flexSkill">
                60%
              </div>
            </div>

            <div className="bar">
              <ScrollAnimation animateIn="fill ninety fill-ninety">
                <div>
                  <div className="tag flexSkill">
                    JavaScript
                  </div>
                </div>
              </ScrollAnimation>
              <div className="end-tag flexSkill">
                90%
              </div>
            </div>

            <div className="bar">
              <ScrollAnimation animateIn="fill fifty fill-fifty">
                <div>
                  <div className="tag flexSkill">
                    Postgresql
                  </div>
                </div>
              </ScrollAnimation>
              <div className="end-tag flexSkill">
                50%
              </div>
            </div>

            <div className="bar">
              <ScrollAnimation animateIn="fill eighty fill-eighty">
                <div>
                  <div className="tag flexSkill">
                    MongoDB
                  </div>
                </div>
              </ScrollAnimation>
              <div className="end-tag flexSkill">
                80%
              </div>
            </div>

            <div className="bar">
              <ScrollAnimation animateIn="fill fifty fill-fifty">
                <div>
                  <div className="tag flexSkill">
                    AWS
                  </div>
                </div>
              </ScrollAnimation>
              <div className="end-tag flexSkill">
                50%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;