import styles from './css/Projects.module.css';
import React, { useState } from 'react';

import Web from './Web';
import Mobile from './Mobile';
import Design from './Design';

function Projects() {
  const [web, setWeb] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [design, setDesign] = useState(false);

  const btnWeb = (e) => {
    setMobile(false);
    setDesign(false);
    setWeb(true);
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
      <div>
        <button onClick={btnWeb}>Web</button>
        <button onClick={btnMobile}>Mobile</button>
        <button onClick={btnDesign}>Design</button>
      </div>
      <div className={styles.content}>
        {web ? <Web /> : null}
        {mobile ? <Mobile /> : null}
        {design ? <Design /> : null}
      </div>
    </div>
  );
}

export default Projects;
