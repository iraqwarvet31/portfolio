import React from 'react';
import styles from '../../portfolio.module.css';

const Portfolio = ({showModal}) => (
  <div id="portfolio" className={styles.portfolio}>
    <div className={styles.container}>
      <h1>PORTFOLIO</h1>
      <hr className={styles.heading}/>
      <div className={styles.projects}>
        <div className={styles.card}>
          <img
            src="https://portfolioprofile.s3-us-west-1.amazonaws.com/retroflixScaled-390-5.png"
            alt=""
            className={styles.card__image}

          />
          <div className={styles.card__overlay}>
            <div className={styles.overlay__text}>
              <div>Retroflix</div>
              <span>JavaScript/Node/EJS</span>
              <button className={styles.btn__more} name="Retroflix" onClick={showModal}>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://portfolioprofile.s3-us-west-1.amazonaws.com/puppeteerScaled-390.jpg"
            alt=""
            className={styles.card__image}

          />
          <div className={styles.card__overlay}>
            <div className={styles.overlay__text}>
              <div>Home Finder</div>
              <span>React/Puppeteer/MongoDB</span>
              <button className={styles.btn__more} name="Home Finder" onClick={showModal}>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://portfolioprofile.s3-us-west-1.amazonaws.com/scale-390.jpg"
            alt=""
            className={styles.card__image}

          />
          <div className={styles.card__overlay}>
            <div className={styles.overlay__text}>
              <div>Croxy back-end</div>
              <span>Postgresql/Node/Nginx/AWS</span>
              <button className={styles.btn__more} name="Croxy back-end" onClick={showModal}>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://portfolioprofile.s3-us-west-1.amazonaws.com/starsScaled-390.jpeg"
            alt=""
            className={styles.card__image}

          />
          <div className={styles.card__overlay}>
            <div className={styles.overlay__text}>
              <div>Croxy front-end</div>
              <span>React/Node/Mongodb/Docker</span>
              <button className={styles.btn__more} name="Croxy front-end" onClick={showModal}>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio;


