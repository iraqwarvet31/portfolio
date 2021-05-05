import React from 'react';
import styles from '../../project.module.css';
import SimpleImageSlider from "react-simple-image-slider";

const Project = ({ activeProject, projectData }) => {
  const selectedProject = projectData
    .filter(e => e.title === activeProject);

  console.log(selectedProject[0].urls)
  return (
    <div className={styles.card}>
      <SimpleImageSlider
        width={700}
        height={450}
        images={selectedProject[0].images}
        showNavs={true}
        useGPURender={true}
        navStyle={2}
        navSize={50}
        navMargin={0}
      />
      <hr className={styles.divider_one} />
      <div className={styles.card_details}>
        <div>{selectedProject[0].title}</div>
        <div>{selectedProject[0].subTitle}</div>
        <hr className={styles.divider_two} />
        <div>{selectedProject[0].description}</div>
      </div>
    </div>
  )
}

export default Project;