import React, { useState } from 'react';

import styles from './css/Project_Btn.module.css';

const Projects_Btn = ({
  btnWeb,
  web,
  btnMobile,
  btnDesign,
  design,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.btns}>
        <button
          onClick={btnWeb}
          className={`${styles.btn} ${web ? styles.active : styles.inactive} `}
        >
          Web
        </button>
        <button
          onClick={btnDesign}
          className={`${styles.btn} ${
            design ? styles.active : styles.inactive
          } `}
        >
          Design
        </button>
      </div>
    </div>
  );
};

export default Projects_Btn;
