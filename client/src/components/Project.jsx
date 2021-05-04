import React from 'react';
import styles from '../../project.module.css';

const Project = ({ activeProject, projectData }) => {
  const selectedProject = projectData
    .filter(e => e.title === activeProject);

  console.log(selectedProject)
  return (
    <div className={styles.card}>
      <img src={selectedProject[0].urls[0]} alt=""/>
      <hr />
      <div className="card_details">
        <h3>{selectedProject[0].title}</h3>
        <h4>{selectedProject[0].subTitle}</h4>
        <p>{selectedProject[0].description}</p>
      </div>
    </div>
  )
}

export default Project;