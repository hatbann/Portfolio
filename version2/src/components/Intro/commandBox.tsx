import moment from 'moment';
import style from '../../styles/intro/commandBox.module.scss';

const CommandBox = () => {
  return (
    <div className={style['container']}>
      <section className={style['top']}>
        <div className={style['top-left']}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={style['top-right']}></div>
      </section>
      <section className={style['command']}>
        <p>Last login: {moment().format('ddd MMM D HH:mm:ss')} on Hatban</p>
      </section>
    </div>
  );
};

export default CommandBox;
