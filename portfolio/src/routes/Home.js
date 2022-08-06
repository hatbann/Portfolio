import { Link } from 'react-router-dom';
import { useRef } from 'react';

import About from '../components/About.js';
import Address from '../components/Address';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Header from '../components/Header.js';

import videoImg from '../images/logo_trans.png';
import styles from '../routes/Home.module.css';

function Home() {
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const address = useRef(null);
  const main = useRef(null);

  return (
    <div className={styles.container}>
      <Header
        main={main}
        about={about}
        skills={skills}
        projects={projects}
        address={address}
      />
      <div className={styles.mainpage} ref={main}>
        <img className={styles.mainImg} src={videoImg}></img>
      </div>
      <div>
        <div ref={about}>
          <About />
        </div>
        <div ref={skills}>
          <Skills />
        </div>
        <div ref={projects}>
          <Projects />
        </div>
        <div ref={address}>
          <Address />
        </div>
      </div>
    </div>
  );
}

export default Home;
