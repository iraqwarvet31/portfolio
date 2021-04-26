import React from 'react';
import styles from '../../portfolio.module.css';

const Portfolio = (props) => (
  <div id="portfolio" className={styles.portfolio}>
    <div className={styles.container}>
      <h1>Portfolio page</h1>
      <hr />
      <div className={styles.projects}>
        <div className="image">
          <img src="https://portfolioprofile.s3-us-west-1.amazonaws.com/scrape390.png" alt=""/>
        </div>
        <div className="image">
          <img src="https://portfolioprofile.s3-us-west-1.amazonaws.com/reviews_paginationScaled390.png" alt=""/>
        </div>
        <div className="image">
          <img src="https://portfolioprofile.s3-us-west-1.amazonaws.com/sdcScaled390.png" alt=""/>
        </div>
        <div className="image">
          <img src="https://portfolioprofile.s3-us-west-1.amazonaws.com/home_retroflixScaled-390.png" alt=""/>
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio;


