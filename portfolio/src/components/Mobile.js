import React from 'react';
import styles from './css/Mobile.module.css';
import CustomSlider from './CustomSlider';

const mobileProjects = [
  {
    id: 1,
    projectName: 'Portfolio',
    image: require('../images/portfolio.png'),
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
    projectName: 'nwitter',
    image: require('../images/nwitter.png'),
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
];

function Mobile() {
  return (
    <div style={{ height: '310px' }} className={styles.text}>
      멋진 결과물로 오겠습니다
      <br />
      조금만 기다려주세요
    </div>
  );
}

export default Mobile;
