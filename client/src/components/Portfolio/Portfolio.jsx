import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './portfolio.module.css';

const Portfolio = ({showModal}) => (
  <div id="portfolio" className={styles.portfolio}>
    <div className={styles.container}>
      <ScrollAnimation animateIn={`${styles.animate} ${styles.bounceInLeft}`}>
        <h1>PORTFOLIO</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn={`${styles.animate} ${styles.bounceInLeft} ${styles.delay2}`}>
        <hr className={styles.heading}/>
      </ScrollAnimation>
      <div className={styles.projects}>
        <ScrollAnimation animateIn={`${styles.animate} ${styles.fadeInTopLeft}`}>
          <div className={`${styles.card}`}>
            <img
              src="https://portfolioprofile.s3-us-west-1.amazonaws.com/retroflixScaled-390-5.png"
              alt=""
              className={styles.card__image}

            />
            <div className={styles.card__overlay}>
              <div className={styles.overlay__text}>
                <div>Retroflix</div>
                <div>JavaScript/Node/EJS</div>
                <button className={styles.btn__more} name="Retroflix" onClick={showModal}>LEARN MORE</button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn={`${styles.animate} ${styles.delay1} ${styles.fadeInDown}`}>
          <div className={`${styles.card}`}>
            <img
              src="https://portfolioprofile.s3-us-west-1.amazonaws.com/homeScaled-390.jpeg"
              alt=""
              className={styles.card__image}

            />
            <div className={styles.card__overlay}>
              <div className={styles.overlay__text}>
                <div>Home Finder</div>
                <div>React/Puppeteer/MongoDB</div>
                <button className={styles.btn__more} name="Home Finder" onClick={showModal}>LEARN MORE</button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn={`${styles.animate} ${styles.delay2} ${styles.fadeInTopRight}`}>
          <div className={`${styles.card}`}>
            <img
              src="https://portfolioprofile.s3-us-west-1.amazonaws.com/metricsScaled-390.jpeg"
              alt=""
              className={styles.card__image}

            />
            <div className={styles.card__overlay}>
              <div className={styles.overlay__text}>
                <div>Croxy back-end</div>
                <div>Postgresql/Node/Nginx/AWS</div>
                <button className={styles.btn__more} name="Croxy back-end" onClick={showModal}>LEARN MORE</button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn={`${styles.animate} ${styles.delay3} ${styles.fadeInUp}`}>
          <div className={`${styles.card}`}>
            <img
              src="https://portfolioprofile.s3-us-west-1.amazonaws.com/marketScaled-390.jpeg"
              alt=""
              className={styles.card__image}

            />
            <div className={styles.card__overlay}>
              <div className={styles.overlay__text}>
                <div>Croxy front-end</div>
                <div>React/Node/Mongodb/Docker</div>
                <button className={styles.btn__more} name="Croxy front-end" onClick={showModal}>LEARN MORE</button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </div>
)

export default Portfolio;


