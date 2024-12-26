import React, { useState } from 'react';
import style from '../styles/skills/skills.module.scss';

export type SkillType = {
  name: string;
  type: skillClass;
  img: string;
};

type skillClass = 'fe' | 'be' | 'etc';

const skillsArr: SkillType[] = [
  {
    name: 'HTML/CSS',
    type: 'fe',
    img: '/images/png/htmlcss.png',
  },
  {
    name: 'Javascript',
    type: 'fe',
    img: '/images/png/javascript.png',
  },
  {
    name: 'Typescript',
    type: 'fe',
    img: '/images/png/ts.png',
  },
  {
    name: 'React',
    type: 'fe',
    img: '/images/png/react.png',
  },
  {
    name: 'Next.js',
    type: 'fe',
    img: '/images/png/next.png',
  },
  {
    name: 'Redux',
    type: 'fe',
    img: '/images/png/redux.png',
  },
  {
    name: 'Recoil',
    type: 'fe',
    img: '/images/png/recoil.png',
  },
  {
    name: 'node.js',
    type: 'be',
    img: '/images/png/nodejs.png',
  },
  {
    name: 'Django',
    type: 'be',
    img: '/images/png/django.png',
  },
  {
    name: 'Git',
    type: 'etc',
    img: '/images/png/git.png',
  },
  {
    name: 'Vercel',
    type: 'etc',
    img: '/images/png/vercel.png',
  },
  {
    name: 'Figma',
    type: 'etc',
    img: '/images/png/figma.png',
  },
  {
    name: 'PhotoShop',
    type: 'etc',
    img: '/images/png/photoshop.png',
  },
  {
    name: 'Illustrator',
    type: 'etc',
    img: '/images/png/ai.png',
  },
];

const Skills = () => {
  const skills: skillClass[] = ['fe', 'be', 'etc'];
  const [hoverItem, setHoverItem] = useState('');

  return (
    <div className={style['container']}>
      <h1 className={style['title']}>skills</h1>
      <div className={style['lists']}>
        {skills.map((skill, idx) => {
          const skillsTemp: SkillType[] = skillsArr.filter(
            (item, idx) => item.type === skill
          );
          return (
            <div className={style['skillList']}>
              <h4 className={`${style['skill-type']} ${style[`${skill}`]}`}>
                {skill}
              </h4>
              <div
                className={`${style['skills-container']} ${style[`${skill}`]}`}
              >
                {skillsTemp.map((temp, idx) => {
                  return (
                    <div className={style['skill']}>
                      <div
                        className={style['skill-img']}
                        onMouseOver={() => {
                          setHoverItem(temp.name);
                        }}
                        onMouseLeave={() => {
                          setHoverItem('');
                        }}
                      >
                        <img src={temp.img} />
                      </div>
                      <span
                        className={
                          hoverItem === temp.name
                            ? `${style['name']} ${style['hover']}`
                            : style['name']
                        }
                      >
                        {temp.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
