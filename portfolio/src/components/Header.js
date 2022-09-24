import styles from './css/Header.module.css';
import { Link } from 'react-scroll';
import logo from '../images/logo_trans.png';
import Skills from './Skills';
import Projects from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ main, about, skills, projects, address }) {
  const scrollToSection = (elelmentRef) => {
    window.scrollTo({
      top: elelmentRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  const onToggleNav = () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle(`${styles.show}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_top}>
          <div className={styles.logo} onClick={() => scrollToSection(main)}>
            <img src={logo} className={styles.logo_img} />
            <div>Hyebin Cho</div>
          </div>
          <button className={styles.navtoggle_bar} onClick={onToggleNav}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className={`${styles.nav}`} id="nav">
          <span
            onClick={() => scrollToSection(about)}
            className={styles.menu}
            style={{ color: '#FFA0A0' }}
          >
            About
          </span>
          <span
            onClick={() => scrollToSection(skills)}
            className={styles.menu}
            style={{ color: '#C2FFA5' }}
          >
            Skills
          </span>
          <span
            onClick={() => scrollToSection(projects)}
            className={styles.menu}
            style={{ color: '#C2E9FF' }}
          >
            Projects
          </span>
          <span
            onClick={() => scrollToSection(address)}
            className={styles.menu}
            style={{ color: '#ECB5FF' }}
          >
            Address
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
