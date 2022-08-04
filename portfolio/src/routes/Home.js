import { Link } from 'react-router-dom';
import GifLoader from 'react-gif-loader';

import About from '../components/About.js';
import Address from '../components/Address';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

import videoImg from '../images/logo_trans.png';
import styles from '../routes/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.mainpage}>
        <img className={styles.mainImg} src={videoImg}></img>
      </div>
      <div>
        <About />
        <Skills />
        <Projects />
        <Address />
      </div>
    </div>
  );
}

export default Home;
