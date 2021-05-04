import React from 'react';
import styles from '../../project.module.css';

const Project = (props) => {
  return (
    <div className={styles.card}>
      <img src="https://portfolioprofile.s3-us-west-1.amazonaws.com/homeNew700.png" alt=""/>
      <div className="card_details">
        <h3>Retroflix streaming solutions</h3>
        <p>Retroflix is a video streaming service for those who enjoy older movies.</p>
      </div>
    </div>
  )
}

export default Project;