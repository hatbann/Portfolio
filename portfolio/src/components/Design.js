import React from 'react';
import styles from './css/Web.module.css';
import CustomSlider from './CustomSlider';

const designProjects = [
  {
    id: 1,
    projectName: '나도기행',
    image: require('../images/나도기행.JPG'),
    site: '../routes/nado.html',
    explain: (
      <>
        <>
          혼행, 즉 혼자여행하기가 유행함에 따라 혼행족이 겪고 있는 어려움을
          해결하고자 서비스를 기획했습니다
        </>
        <>
          &nbsp;질문을 주고 받으면서 궁금한 점을 해결할 수 있습니다. 또한 혼행을
          다녀온 후 기록을 남겨 다른이와 공유할 수 있고 또는 혼자만의 기록으로
          남길 수 있습니다
        </>
      </>
    ),
  },
  {
    id: 2,
    projectName: 'Portfolio Logo',
    image: require('../images/logo_trans.png'),
    site: 'https://drive.google.com/uc?id=1lQ3T10-fNSnnLlhL8-Idb92wId-HyJHJ',
    explain: (
      <>
        제 포트폴리오 사이트에 맞는 로고를 blender툴을 이용해 제작했습니다.
        계속해서 넓은 개발 시장에서 배우고 성장하고자 하는 저의 모습을 넓은
        바닷속에서 헤엄치는 물고기에 비유했고 제 이름의 초성 ㅈ,ㅎ,ㅂ을 본뜬
        모양을 이용했습니다.
      </>
    ),
  },
  {
    id: 2,
    projectName: '제로웨이브',
    image: require('../images/zerowave.png'),
    site: 'http://115.85.180.209:8000/zerowave',
    explain: (
      <>
        HTML, CSS를 이용해서 제작한 카카오톡 클론사이트입니다. 반응형 웹을
        공부하기 위해 모바일 사이즈에 맞게 제작했으며 다양한 CSS 요소를 이용해
        재미있고 동적인 애니메이션 효과를 주었습니다
      </>
    ),
  },
];

function Design() {
  return (
    <div>
      <CustomSlider projects={designProjects} />
    </div>
  );
}

export default Design;
