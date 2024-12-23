import React, { EventHandler, RefObject, useContext } from 'react';
import style from '../styles/header.module.scss';
import { DarkmodeContext, tabNames } from '@/app/page';

const Header = ({
  handleCilck,
  refArr,
  tabName,
}: {
  handleCilck: (elementRef: HTMLDivElement, e: React.MouseEvent) => void;
  refArr: RefObject<HTMLDivElement>[];
  tabName: tabNames;
}) => {
  const { isDark, setIsDark } = useContext(DarkmodeContext);

  return (
    <div
      className={
        !isDark ? style['container'] : `${style['container']} ${style['dark']}`
      }
    >
      <div
        className={
          !isDark ? style['logo'] : `${style['logo']} ${style['dark']}`
        }
      >
        Logo
      </div>
      <div
        className={
          !isDark ? style['menus'] : `${style['menus']} ${style['dark']}`
        }
      >
        <span
          onClick={(e) => handleCilck(refArr[0].current!, e)}
          className={
            tabName === 'intro'
              ? !isDark
                ? style.selected
                : `${style['selected']} ${style['dark']}`
              : !isDark
              ? ''
              : `${style['dark']}`
          }
        >
          INTRO
        </span>
        <span
          onClick={(e) => handleCilck(refArr[1].current!, e)}
          className={
            tabName === 'skills'
              ? !isDark
                ? style.selected
                : `${style['selected']} ${style['dark']}`
              : !isDark
              ? ''
              : `${style['dark']}`
          }
        >
          SKILLS
        </span>
        <span
          onClick={(e) => handleCilck(refArr[2].current!, e)}
          className={
            tabName === 'career'
              ? !isDark
                ? style.selected
                : `${style['selected']} ${style['dark']}`
              : !isDark
              ? ''
              : `${style['dark']}`
          }
        >
          CAREER
        </span>
        <span
          onClick={(e) => handleCilck(refArr[3].current!, e)}
          className={
            tabName === 'activity'
              ? !isDark
                ? style.selected
                : `${style['selected']} ${style['dark']}`
              : !isDark
              ? ''
              : `${style['dark']}`
          }
        >
          Activity
        </span>
        <span
          onClick={(e) => handleCilck(refArr[4].current!, e)}
          className={
            tabName === 'contact'
              ? !isDark
                ? style.selected
                : `${style['selected']} ${style['dark']}`
              : !isDark
              ? ''
              : `${style['dark']}`
          }
        >
          CONTACT
        </span>
      </div>
      <div className={style['btn-wrapper']}>
        <button
          className={
            !isDark
              ? `${style['light']} ${style['btn-container']}`
              : `${style['dark']} ${style['btn-container']}`
          }
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          <span
            className={
              !isDark
                ? `${style['btn']} ${style['light']}`
                : `${style['btn']} ${style['light']} ${style['hidden']}`
            }
          ></span>
          <span
            className={
              isDark
                ? `${style['btn']} ${style['dark']}`
                : `${style['btn']} ${style['dark']} ${style['hidden']}`
            }
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
