import { Link } from 'react-router-dom';
import styles from './css/About.module.css';

import profileImg from '../images/프로필.jpg';
function About() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={profileImg} alt={'profile'} className={styles.profile__img} />
        <div className={styles.profile__details}>
          <span>Info</span>
          <div className={styles.profile__detail}>
            <div className={styles.profile__detail__title}>
              <div style={{ marginBottom: '5px' }}>이름</div>
              <div style={{ marginBottom: '5px' }}>생년월일</div>
              <div style={{ marginBottom: '5px' }}>학력</div>
            </div>
            <div className={styles.profile__detail__content}>
              <div style={{ marginBottom: '5px' }}>조혜빈</div>
              <div style={{ marginBottom: '5px' }}>1999.05.07</div>
              <div style={{ marginBottom: '5px' }}>
                홍익대학교 시각디자인과 전공
              </div>
              <div style={{ marginBottom: '5px' }}>
                홍익대학교 컴퓨터공학과 복수전공
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.explain}>
        <h2>다채로운 프론트엔드 개발자를 위해 헤엄치는 조혜빈 입니다.</h2>
        <p>
          안녕하세요! 다양한 분야에서 필요로 하는 개발자가 되기 위해 배우고 있는
          주니어 개발자 조혜빈입니다. 유저가 편하게 사용하고 즐거움을 느낄 수
          있는 웹 서비스를 개발하는 것이 저의 비전입니다. 계속해서 들여다보고
          머물고 싶은 웹 서비스를 구축하기 위해 개발이라는 바다속에서 쉬지않고
          헤엄치는 물고기가 되어 다채로운 웹 서비스를 만들 것 입니다.
        </p>
      </div>
    </div>
  );
}

export default About;
