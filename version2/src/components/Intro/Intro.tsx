import React from 'react';
import style from '../../styles/intro/intro.module.scss';
import CommandBox from './commandBox';

const Intro = () => {
  return (
    <div className={style['container']}>
      <CommandBox />
    </div>
  );
};

export default Intro;
