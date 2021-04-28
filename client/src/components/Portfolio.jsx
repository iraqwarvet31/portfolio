import React from 'react';
import styles from '../../portfolio.module.css';

const Portfolio = (props) => (
  <div id="portfolio" className={styles.portfolio}>
    <div className={styles.container}>
      <h1>PORTFOLIO</h1>
      <hr className={styles.heading}/>
      <div className={styles.projects}>
        <div className={styles.card}>
          <img src="https://portfolioprofile.s3-us-west-1.amazonaws.com/retroflixScaled-390-5.png" alt=""/>
          <div className="card__overlay">
            <h3>Project Name</h3>
            <p>Description</p>
            <button>See More</button>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://portfolioprofile.s3-us-west-1.amazonaws.com/puppeteerScaled-390.jpg" alt=""/>
          <div className="card__overlay">
            <h3>Project Name</h3>
            <p>Description</p>
            <button>See More</button>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://portfolioprofile.s3-us-west-1.amazonaws.com/scale-390.jpg" alt=""/>
          <div className="card__overlay">
            <h3>Project Name</h3>
            <p>Description</p>
            <button>See More</button>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://portfolioprofile.s3-us-west-1.amazonaws.com/starsScaled-390.jpeg" alt=""/>
          <div className="card__overlay">
            <h3>Project Name</h3>
            <p>Description</p>
            <button>See More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio;


