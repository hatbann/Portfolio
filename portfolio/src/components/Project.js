import React from 'react';
import styles from './css/Project.module.css';

const Project = ({ project }) => {
  return (
    <div className={styles.slideContainer}>
      <img src={project.image} className={styles.img} />
      <h3 className={styles.projectName}>{project.projectName}</h3>
      <p className={styles.explain}>{project.explain}</p>
    </div>
  );
};

export default Project;
