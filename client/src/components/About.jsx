import React from 'react';

import Navbar from './Navbar.jsx'

const About = (props) => {
  console.log('ran')
  return (
    <div className="about">
      <div className="container">
        <h1>ABOUT</h1>
        <hr />
        <div className="skills-container flex">
          <div className="skill-container">
            <div className="icon-container">
              <span className="iconify" data-icon="mdi-speedometer" data-inline="false"></span>
            </div>
            <div className="text-container">
              <div className="skill-text-container">
                Fast
              </div>
              <div className="skill-description-container">
                <span>Fast load times and lag free</span>
                <span> interaction, my highest priority.</span>
              </div>
            </div>
          </div>
          <div className="skill-container">
            <div className="icon-container">
              <span className="iconify" data-icon="mdi:cellphone-link" data-inline="false"></span>
            </div>
            <div className="text-container">
              <div className="skill-text-container">
                Responsive
              </div>
              <div className="skill-description-container">
                <span>My layouts will work on any</span>
                <span> device, big or small.</span>
              </div>
            </div>
          </div>
          <div className="skill-container">
            <div className="icon-container">
              <span className="iconify" data-icon="ic:outline-lightbulb" data-inline="false"></span>
            </div>
            <div className="text-container">
              <div className="skill-text-container">
                Intuitive
              </div>
              <div className="skill-description-container">
                <span>Strong preference for easy to</span>
                <span> use, intuitive UX/UI</span>
              </div>
            </div>
          </div>
          <div className="skill-container">
            <div className="icon-container">
              <span className="iconify" data-icon="ic:sharp-dynamic-feed" data-inline="false"></span>
            </div>
            <div className="text-container">
              <div className="skill-text-container">
                Dynamic
              </div>
              <div className="skill-description-container">
                <span>Websites don't have to be static, I love</span>
                <span> making pages come to life.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="me-container flex">
          <div className="profile-container item">
            <img src="https://portfolioprofile.s3-us-west-1.amazonaws.com/classic_profile_pic.jpg" />
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
              <div className="fill fill-eighty">
                <div className="tag flexSkill">
                  JavaScript
                </div>
              </div>
              <div className="end-tag flexSkill">
                80%
              </div>
            </div>
            <div className="bar">
              <div className="fill fill-ninety">
                <div className="tag flexSkill">
                  HTML
                </div>
              </div>
              <div className="end-tag flexSkill">
                90%
              </div>
            </div>
            <div className="bar">
              <div className="fill fill-ninety">
                <div className="tag flexSkill">
                  CSS
                </div>
              </div>
              <div className="end-tag flexSkill">
                90%
              </div>
            </div>
            <div className="bar">
              <div className="fill fill-eighty">
                <div className="tag flexSkill">
                  React
                </div>
              </div>
              <div className="end-tag flexSkill">
                80%
              </div>
            </div>
            <div className="bar">
              <div className="fill fill-seventy">
                <div className="tag flexSkill">
                  Node
                </div>
              </div>
              <div className="end-tag flexSkill">
                70%
              </div>
            </div>
            <div className="bar">
              <div className="fill fill-sixty">
                <div className="tag flexSkill">
                  Mocha/Chai
                </div>
              </div>
              <div className="end-tag flexSkill">
                60%
              </div>
            </div>
            <div className="bar">
              <div className="fill fill-ninety">
                <div className="tag flexSkill">
                  JavaScript
                </div>
              </div>
              <div className="end-tag flexSkill">
                90%
              </div>
            </div>
            <div className="bar">
              <div className="fill fill-fifty">
                <div className="tag flexSkill">
                  Postgresql
                </div>
              </div>
              <div className="end-tag flexSkill">
                50%
              </div>
            </div>
            <div className="bar">
              <div className="fill fill-eighty">
                <div className="tag flexSkill">
                  MongoDB
                </div>
              </div>
              <div className="end-tag flexSkill">
                80%
              </div>
            </div>
            <div className="bar">
              <div className="fill fill-fifty">
                <div className="tag flexSkill">
                  AWS
                </div>
              </div>
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