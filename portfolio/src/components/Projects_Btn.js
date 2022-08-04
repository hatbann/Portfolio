import React, { useState } from 'react';

import styles from './css/Project_Btn.module.css';

const Projects_Btn = ({
  btnWeb,
  web,
  btnMobile,
  mobile,
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
          onClick={btnMobile}
          className={`${styles.btn} ${
            mobile ? styles.active : styles.inactive
          } `}
        >
          Mobile
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
