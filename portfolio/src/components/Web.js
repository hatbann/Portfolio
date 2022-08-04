import React from 'react';
import styles from './css/Web.module.css';
import CustomSlider from './CustomSlider';

const webProjects = [
  {
    id: 1,
    projectName: 'Portfolio',
    image: require('../images/portfolio.png'),
    site: '',
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
  {
    id: 2,
    projectName: 'fishroom',
    image: require('../images/fishroom.png'),
    site: 'https://hatbann.github.io/fishroom/#/',
    explain: (
      <>
        <>
          react를 사용해 트위터 클론코딩을 한 경험을 바탕으로 제작한
          사이트입니다.
        </>
        <>
          &nbsp;게임 스크린샷과 짧은 텍스트를 남기면서 그동안의 게임플레이
          기록을 남길 수 있는 곳입니다. &nbsp;
        </>
        <>firebase를 통해 유저 및 자료들을 관리합니다</>
      </>
    ),
  },
  {
    id: 3,
    projectName: 'nwitter',
    image: require('../images/nwitter.png'),
    site: 'https://hatbann.github.io/nwitter/#/',
    explain: (
      <>
        <>react와 firebase를 활용한 클론코딩을 진행했습니다.&nbsp;</>
        <>
          Email과 password를 통해 회원가입이 가능하며, 구글 및 깃허브로
          소셜로그인 또한 가능합니다.&nbsp;
        </>
        <>
          글쓴이의 경우 삭제 및 수정이 가능하고, 회원은 자신의 닉네임을 변경할
          수 있습니다
        </>
      </>
    ),
  },
  {
    id: 4,
    projectName: '카카오톡 클론코딩',
    image: require('../images/kokoa_2.png'),
    site: 'https://hatbann.github.io/kokoa-clone/',
    explain: (
      <>
        HTML, CSS를 이용해서 제작한 카카오톡 클론사이트입니다. 반응형 웹을
        공부하기 위해 모바일 사이즈에 맞게 제작했으며 다양한 CSS 요소를 이용해
        재미있고 동적인 애니메이션 효과를 주었습니다
      </>
    ),
  },
  {
    id: 5,
    projectName: '그림판',
    image: require('../images/paint.png'),
    site: 'https://hatbann.github.io/paint/',
    explain: (
      <>
        HTML, CSS를 이용해서 제작한 카카오톡 클론사이트입니다. 반응형 웹을
        공부하기 위해 모바일 사이즈에 맞게 제작했으며 다양한 CSS 요소를 이용해
        재미있고 동적인 애니메이션 효과를 주었습니다
      </>
    ),
  },
];

function Web() {
  return (
    <div>
      <CustomSlider projects={webProjects} />
    </div>
  );
}

export default Web;
