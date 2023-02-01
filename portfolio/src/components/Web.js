import React from 'react';
import styles from './css/Web.module.css';
import CustomSlider from './CustomSlider';

const webProjects = [
  {
    id: 1,
    projectName: 'Portfolio',
    image: require('../images/portfolio.png'),
    site: '/',
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
    projectName: '제로웨이브',
    image: require('../images/zerowave.png'),
    site: 'http://27.96.130.247:8000/zerowave',
    explain: (
      <>
        HTML, CSS를 이용해서 제작한 카카오톡 클론사이트입니다. 반응형 웹을
        공부하기 위해 모바일 사이즈에 맞게 제작했으며 다양한 CSS 요소를 이용해
        재미있고 동적인 애니메이션 효과를 주었습니다
      </>
    ),
  },
  {
    id: 3,
    projectName: 'Todo List',
    image: require('../images/todolist.png'),
    site: 'https://hatbann.github.io/todo-list/todolist.html',
    explain: (
      <>
        HTML, CSS, JavaScipt 를 이용해 투두리스트를 만들었습니다. + 버튼을 눌러
        추가할 수 있고, 추가한 투두를 수정 및 삭제할 수 있습니다. 또한 투두 옆의
        버튼으로 완료를 표시할 수 있으며, 투두에 대한 정보는 localStorage에
        저장됩니다. 프로필 이미지를 선택해 프로필을 변경할 수 있습니다.
      </>
    ),
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
