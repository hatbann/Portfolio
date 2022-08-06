import React, { useRef } from 'react';
import styles from './css/Project.module.css';

const Project = ({ project }) => {
  const onClick = (site) => {
    const sitetype = site.substring(site.length - 4, site.length);
    console.log(sitetype);
  };

  return (
    <div className={styles.slideContainer}>
      <img
        src={project.image}
        className={styles.img}
        onClick={onClick(project.site)}
      />
      <h3 className={styles.projectName}>{project.projectName}</h3>
      <p className={styles.explain}>{project.explain}</p>
    </div>
  );
};

export default Project;
