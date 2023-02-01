import styles from './css/Projects.module.css';
import React, { useState } from 'react';

import Web from './Web';
import Mobile from './Mobile';
import Design from './Design';
import Projects_Btn from './Projects_Btn';

function Projects() {
  const [web, setWeb] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [design, setDesign] = useState(false);
  const btnWeb = (e) => {
    setWeb(true);
    setMobile(false);
    setDesign(false);
  };
  const btnMobile = (e) => {
    setWeb(false);
    setDesign(false);
    setMobile(true);
  };

  const btnDesign = (e) => {
    setWeb(false);
    setMobile(false);
    setDesign(true);
  };

  return (
    <div className={styles.container}>
      <Projects_Btn
        btnWeb={btnWeb}
        web={web}
        btnMobile={btnMobile}
        btnDesign={btnDesign}
        design={design}
      />
      <div className={styles.content}>
        {web ? <Web /> : null}
        {design ? <Design /> : null}
      </div>
    </div>
  );
}

export default Projects;
