import React from 'react';
import style from '../styles/contact/contact.module.scss';

const Contact = () => {
  return (
    <div className={style['container']}>
      <h1 className={style['title']}>Contact</h1>
      <div className={style['phrase']}>
        <p>방문해주셔서 감사합니다</p>
        <p>문의 사항은 언제든지 환영합니다</p>
      </div>
      <div className={style['contact']}>
        <p className={style['line']}></p>
        <div className={style['contact-info-wrapper']}>
          <div className={style['contact-info']}>
            <h1>Email</h1>
            <p>chohyebinn@naver.com</p>
          </div>
          <div className={style['contact-info']}>
            <h1>Github</h1>
            <p
              onClick={() => {
                window.open('https://github.com/hatbann');
              }}
            >
              github.com/hatbann
            </p>
          </div>
          <div className={style['contact-info']}>
            <h1>Velog</h1>
            <p
              onClick={() => {
                window.open('https://velog.io/@hatbann/posts');
              }}
            >
              velog.io/@hatbann/posts
            </p>
          </div>
          <div className={style['contact-info']}>
            <h1>Notion</h1>
            <p
              onClick={() => {
                window.open(
                  'https://www.notion.so/9ebf524c879e4cbc9d46d00c20ff80d2?v=b74c3d283e2c4561891bbd99786c4d29&pvs=4'
                );
              }}
            >
              notion.so/hatbann
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
