import React from 'react';
import styles from './css/Address.module.css';

const Address = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logos}>
        <img
          src={require('../images/github.png')}
          className={styles.github_img}
          onClick={() => window.open('https://github.com/hatbann', '_blank')}
        />
        <img
          className={styles.github_img}
          src={require('../images/Notion.png')}
          onClick={() =>
            window.open(
              'https://accessible-coast-252.notion.site/9ebf524c879e4cbc9d46d00c20ff80d2?v=b74c3d283e2c4561891bbd99786c4d29'
            )
          }
        />
        <img
          className={styles.github_img}
          src={require('../images/tistory.png')}
          onClick={() => window.open('https://hatban57.tistory.com/')}
        />
        <img
          className={styles.github_img}
          src={require('../images/velog.png')}
          onClick={() => window.open('https://velog.io/@hatbann')}
        />
      </div>

      <div>email : chohyebinn@naver.com</div>
    </div>
  );
};

export default Address;
