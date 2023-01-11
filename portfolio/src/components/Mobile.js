import React from 'react';
import styles from './css/Mobile.module.css';
import CustomSlider from './CustomSlider';

const mobileProjects = [
  {
    id: 1,
    projectName: 'DogsBooks',
    image: require('../images/dogsbooks.png'),
    site: 'https://hatbann.github.io/dogsbooks/',
    explain: (
      <>
        <>
          기존에 있던 javascript만을 이용해 만든 포트폴리오 사이트를
          디벨롭했습니다.
        </>
        <>&nbsp;저만의 포트폴리오를 리액트 기반 환경에서 다시 제작했습니다</>
      </>
    ),
  },
];

function Mobile() {
  return (
    <div>
      <CustomSlider projects={mobileProjects} />
    </div>
  );
}

export default Mobile;
