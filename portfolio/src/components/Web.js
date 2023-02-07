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
    site: 'http://49.50.173.65:8000/zerowave',
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
    projectName: 'BunnyLetter',
    image: require('../images/bunnyletter.png'),
    site: 'http://49.50.173.65:3000/',
    explain: (
      <>
2023 계묘년을 맞이해 주변 사람들에게 편지를 작성해 마음을 전달할 수 있는 소통의 장이 되는 사이트를 제작했습니다. 편지를 작성하고 회원인 지인의 닉네임을 검색해 전송할 수 있습니다. 또한 카카오톡 공유하기로 편지를 보냈다는 것을 알릴 수 있습니다.
      </>
    ),
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    projectName: '그림판',
    image: require('../images/paint.png'),
    site: 'https://hatbann.github.io/paint/',
    explain: (
      <>
        HTML, CSS, Javascript를 이용해서 제작한 그림판 클론사이트입니다. 그림판 색 전체 칠하기, 그림그리기, 선 두께 변경 및 색상 변경이 가능하며 만든 그림을 다운로드 할 수 있습니다.
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
