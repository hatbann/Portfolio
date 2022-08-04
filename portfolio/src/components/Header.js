import styles from './css/Header.module.css';
import { Link } from 'react-scroll';
import logo from '../images/logo_trans.png';
import Skills from './Skills';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} className={styles.logo_img} />
          <div>Hyebin Cho</div>
        </div>
        <div className={styles.menus}>
          <Link>
            <span className={styles.menu} style={{ color: '#FFA0A0' }}>
              About
            </span>
          </Link>
          <span className={styles.menu} style={{ color: '#C2FFA5' }}>
            Skills
          </span>
          <span className={styles.menu} style={{ color: '#C2E9FF' }}>
            Projects
          </span>
          <span className={styles.menu} style={{ color: '#ECB5FF' }}>
            Address
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
