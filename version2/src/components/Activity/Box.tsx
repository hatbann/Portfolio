import React from 'react';
import { ActivityType } from './Activity';
import style from '../../styles/activity/box.module.scss';

const Box = ({ item }: { item: ActivityType }) => {
  return (
    <div
      className={style['container']}
      onClick={() => {
        if (item.link) {
          window.open(item.link);
        }
      }}
    >
      {item.img && <img src={item.img} className={style['thumbnail']} />}
      <h3 className={style['title']}>{item.title}</h3>
      <ul className={style['contents']}>
        {item.contents.map((content, idx) => {
          return <li className={style['content']}>{content}</li>;
        })}
      </ul>
    </div>
  );
};

export default Box;
