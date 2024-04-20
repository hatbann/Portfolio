import React, { EventHandler } from 'react';
import style from '../styles/header.module.scss';

const Header = ({
  handleCilck,
}: {
  handleCilck: (e: React.MouseEvent) => void;
}) => {
  return (
    <div className={style['container']}>
      <div>Logo</div>
      <div onClick={handleCilck} className={style['menus']}>
        <span id="introViewRef">INTRO</span>
        <span id="skillsViewRef">SKILLS</span>
        <span id="careerViewRef">CAREER</span>
        <span id="projectsViewRef">PROJECTS</span>
        <span id="contactViewRef">CONTACT</span>
      </div>
      <div>toggle button</div>
    </div>
  );
};

export default Header;
