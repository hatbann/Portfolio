import React, { EventHandler, RefObject } from 'react';
import style from '../styles/header.module.scss';
import { tabNames } from '@/app/page';

const Header = ({
  handleCilck,
  refArr,
  tabName,
}: {
  handleCilck: (elementRef: HTMLDivElement, e: React.MouseEvent) => void;
  refArr: RefObject<HTMLDivElement>[];
  tabName: tabNames;
}) => {
  return (
    <div className={style['container']}>
      <div>Logo</div>
      <div className={style['menus']}>
        <span
          onClick={(e) => handleCilck(refArr[0].current!, e)}
          className={tabName === 'intro' ? style.selected : ''}
        >
          INTRO
        </span>
        <span
          onClick={(e) => handleCilck(refArr[1].current!, e)}
          className={tabName === 'skills' ? style.selected : ''}
        >
          SKILLS
        </span>
        <span
          onClick={(e) => handleCilck(refArr[2].current!, e)}
          className={tabName === 'career' ? style.selected : ''}
        >
          CAREER
        </span>
        <span
          onClick={(e) => handleCilck(refArr[3].current!, e)}
          className={tabName === 'project' ? style.selected : ''}
        >
          PROJECTS
        </span>
        <span
          onClick={(e) => handleCilck(refArr[4].current!, e)}
          className={tabName === 'contact' ? style.selected : ''}
        >
          CONTACT
        </span>
      </div>
      <div>toggle button</div>
    </div>
  );
};

export default Header;
