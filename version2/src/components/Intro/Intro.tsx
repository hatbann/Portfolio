import React, { useContext } from 'react';
import style from '../../styles/intro/intro.module.scss';
import CommandBox from './commandBox';
import { DarkmodeContext } from '@/app/page';

const Intro = () => {
  const { isDark, setIsDark } = useContext(DarkmodeContext);

  return (
    <div
      className={
        !isDark ? style['container'] : `${style['container']} ${style['dark']}`
      }
    >
      <CommandBox />
    </div>
  );
};

export default Intro;
