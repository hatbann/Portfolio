import React from 'react';
import styles from './css/Address.module.css';

const Address = (props) => {
  return (
    <div>
      <img
        src={require('../images/github.png')}
        className={styles.github_img}
        onClick={() => window.open('https://github.com/hatbann', '_blank')}
      />
    </div>
  );
};

export default Address;
