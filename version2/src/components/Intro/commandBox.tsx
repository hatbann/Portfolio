import moment from 'moment';
import style from '../../styles/intro/commandBox.module.scss';
import { DarkmodeContext } from '@/app/page';
import { useContext } from 'react';

const CommandBox = () => {
  const { isDark, setIsDark } = useContext(DarkmodeContext);

  return (
    <div
      className={
        !isDark ? style['container'] : `${style['container']} ${style['dark']}`
      }
    >
      <section
        className={!isDark ? style['top'] : `${style['top']} ${style['dark']}`}
      >
        <div className={style['top-left']}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={style['top-right']}></div>
      </section>
      <section
        className={
          !isDark ? style['command'] : `${style['command']} ${style['dark']}`
        }
      >
        <p>Last login: {moment().format('ddd MMM D HH:mm:ss')} on Hatban</p>
        <div className={style['typing-wrapper']}>
          <div className={style['typing']}>Hi, I'm Hyebin, a developer.</div>
        </div>
      </section>
    </div>
  );
};

export default CommandBox;
