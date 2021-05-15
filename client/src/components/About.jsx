import React from 'react';
import styles from '../../about.module.css'
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Navbar from './Navbar.jsx'

const About = (props) => {

  return (
    <div id="about" className={styles.about}>
      <div className={styles.container}>
        <h1>ABOUT</h1>
        <hr className={styles.heading}/>
        <div className={`${styles.skillsContainer} ${styles.flex}`}>
          <div className={styles.skillContainer}>
            <ScrollAnimation animateIn={`${styles.animate__animated} ${styles.flipInY}`}>
              <div className={styles.iconContainer}>
                <span className={`${styles.iconify} iconify`} data-icon="ps:lab" data-inline="false"></span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn">
              <div className={styles.textContainer}>
                <div className={styles.skillTextContainer}>
                  TDD
                </div>
                <div className={styles.descriptionContainer}>
                  <span>Knowledeable with many testing</span>
                  <span> frameworks such as Mocha/Chai and Jest/Enzyme</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className={styles.skillContainer}>
            <ScrollAnimation animateIn={`${styles.animate__animated} ${styles.flipInY} ${styles.delay1}`}>
              <div className={styles.iconContainer}>
                <span className={`${styles.iconify} iconify`} data-icon="zmdi:card-travel" data-inline="false"></span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn={`animate__fadeIn ${styles.delay1}`}>
              <div className={styles.textContainer}>
                <div className={styles.skillTextContainer}>
                  Deployment
                </div>
                <div className={styles.descriptionContainer}>
                  <span>Dockerized multiple Apps and deployed to</span>
                  <span> AWS EC2 instances and Heroku.</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className={styles.skillContainer}>
            <ScrollAnimation animateIn={`${styles.animate__animated} ${styles.flipInY} ${styles.delay2}`}>
              <div className={styles.iconContainer}>
                <span className={`${styles.iconify} iconify`} data-icon="fa-solid:people-arrows" data-inline="false"></span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn={`animate__fadeIn ${styles.delay2}`}>
              <div className={styles.textContainer}>
                <div className={styles.skillTextContainer}>
                  Team Work
                </div>
                <div className={styles.descriptionContainer}>
                  <span>Familiar working in Agile</span>
                  <span> environments using ticketing system Trello.</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className={styles.skillContainer}>
            <ScrollAnimation animateIn={`${styles.animate__animated} ${styles.flipInY} ${styles.delay3}`}>
              <div className={styles.iconContainer}>
                <span className={`${styles.iconify} iconify`} data-icon="mdi:speedometer" data-inline="false"></span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn={`animate__fadeIn ${styles.delay3}`}>
              <div className={styles.textContainer}>
                <div className={styles.skillTextContainer}>
                  Optimization
                </div>
                <div className={styles.descriptionContainer}>
                  <span>Fast load times and lag free</span>
                  <span> are my highest priority.</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className={`${styles.meContainer} ${styles.flex}`}>
          <div className={`${styles.profileContainer} ${styles.item}`}>
            <img src="https://portfolioprofile.s3-us-west-1.amazonaws.com/20210418_180012.jpg" />
            <div className={styles.meHeader}>
              Who am I?
            </div>
            <div className={styles.meText}>
              <span>I'm a Software Engineer living in Pismo Beach, CA.</span>
              <span> I have a serious passion for solving complex</span>
              <span> problems and bringing ideas to life. No task is impossible.</span>
              <br />
              <a href="#"> Let's colaborate!</a>
            </div>
          </div>
          <div className={styles.itemsContainer}>
            <div className={styles.itemsWrapper}>
              <div className={styles.bar}>
                <ScrollAnimation animateIn={`${styles.fillEighty} ${styles.fill} ${styles.eighty}`}>
                  <div>
                    <div className={`${styles.tag} ${styles.flexSkill}`}>
                      JavaScript
                    </div>
                  </div>
                </ScrollAnimation>
                <div className={`${styles.endTag} ${styles.flexSkill}`}>
                  80%
                </div>
              </div>

              <div className={styles.bar}>
                <ScrollAnimation animateIn={`${styles.fillNinety} ${styles.fill} ${styles.ninety}`}>
                  <div>
                    <div className={`${styles.tag} ${styles.flexSkill}`}>
                      HTML
                    </div>
                  </div>
                </ScrollAnimation>
                <div className={`${styles.endTag} ${styles.flexSkill}`}>
                  90%
                </div>
              </div>

              <div className={styles.bar}>
                <ScrollAnimation animateIn={`${styles.fillNinety} ${styles.fill} ${styles.ninety}`}>
                  <div>
                    <div className={`${styles.tag} ${styles.flexSkill}`}>
                      CSS
                    </div>
                  </div>
                </ScrollAnimation>
                <div className={`${styles.endTag} ${styles.flexSkill}`}>
                  90%
                </div>
              </div>

              <div className={styles.bar}>
                <ScrollAnimation animateIn={`${styles.fillEighty} ${styles.fill} ${styles.eighty}`}>
                  <div>
                    <div className={`${styles.tag} ${styles.flexSkill}`}>
                      React
                    </div>
                  </div>
                </ScrollAnimation>
                <div className={`${styles.endTag} ${styles.flexSkill}`}>
                  80%
                </div>
              </div>

              <div className={styles.bar}>
                <ScrollAnimation animateIn={`${styles.fillSeventy} ${styles.fill} ${styles.seventy}`}>
                  <div>
                    <div className={`${styles.tag} ${styles.flexSkill}`}>
                      Node
                    </div>
                  </div>
                </ScrollAnimation>
                <div className={`${styles.endTag} ${styles.flexSkill}`}>
                  70%
                </div>
              </div>

              <div className={styles.bar}>
                <ScrollAnimation animateIn={`${styles.fillSixty} ${styles.fill} ${styles.sixty}`}>
                  <div>
                    <div className={`${styles.tag} ${styles.flexSkill}`}>
                      Mocha/Chai
                    </div>
                  </div>
                </ScrollAnimation>
                <div className={`${styles.endTag} ${styles.flexSkill}`}>
                  60%
                </div>
              </div>

              <div className={styles.bar}>
                <ScrollAnimation animateIn={`${styles.fillNinety} ${styles.fill} ${styles.ninety}`}>
                  <div>
                    <div className={`${styles.tag} ${styles.flexSkill}`}>
                      JavaScript
                    </div>
                  </div>
                </ScrollAnimation>
                <div className={`${styles.endTag} ${styles.flexSkill}`}>
                  90%
                </div>
              </div>

              <div className={styles.bar}>
                <ScrollAnimation animateIn={`${styles.fillFifty} ${styles.fill} ${styles.fifty}`}>
                  <div>
                    <div className={`${styles.tag} ${styles.flexSkill}`}>
                      Postgresql
                    </div>
                  </div>
                </ScrollAnimation>
                <div className={`${styles.endTag} ${styles.flexSkill}`}>
                  50%
                </div>
              </div>

              <div className={styles.bar}>
                <ScrollAnimation animateIn={`${styles.fillEighty} ${styles.fill} ${styles.eighty}`}>
                  <div>
                    <div className={`${styles.tag} ${styles.flexSkill}`}>
                      MongoDB
                    </div>
                  </div>
                </ScrollAnimation>
                <div className={`${styles.endTag} ${styles.flexSkill}`}>
                  80%
                </div>
              </div>

              <div className={styles.bar}>
                <ScrollAnimation animateIn={`${styles.fillFifty} ${styles.fill} ${styles.fifty}`}>
                  <div>
                    <div className={`${styles.tag} ${styles.flexSkill}`}>
                      AWS
                    </div>
                  </div>
                </ScrollAnimation>
                <div className={`${styles.endTag} ${styles.flexSkill}`}>
                  50%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;