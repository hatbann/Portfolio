import React from 'react';
import style from '../styles/career/career.module.scss';
import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Career = () => {
  return (
    <div className={style['container']}>
      <h1 className={style['title']}>Careeer</h1>
      <div className={style['career-container']}>
        <div className={style['company']}>
          <h1>Juice</h1>
          <div className={style['info']}>
            <p>프론트엔드 개발자</p>
            <p>
              2023.04.17 ~ (+{moment().diff(moment('2023.04.17'), 'days')} days)
            </p>
          </div>
        </div>
        <section className={style['swiper-wrapper']}>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className={style['swiper']}
          >
            <SwiperSlide className={style['swiper-slide']}>
              <div className={style['img-wrapper']}>
                <img
                  src="/images/png/rela.png"
                  alt="rela"
                  onClick={() => {
                    window.open('https://rela.co.kr/');
                  }}
                />
              </div>
              <div className={style['contents']}>
                <div className={style['top']}>
                  <span
                    className={style['top-title']}
                    style={{ color: '#fe5000' }}
                  >
                    Re:La
                  </span>
                  <span className={style['top-info']}>
                    AI를 통해 악보를 생성하고 공유하는 서비스
                  </span>
                </div>
                <div className={style['line']}></div>
                <div className={style['bottom']}>
                  <div className={style['bottom-title']}>내용</div>
                  <div className={style['bottom-info']}>
                    <span>서비스 출시, 리뉴얼 및 고도화진행</span>
                    <span>xstate, recoil을 통한 전역 상태 관리</span>
                    <span>storybook을 사용한 테스트 자동화 경험</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <div className={style['img-wrapper']}>
                <img
                  src="/images/png/gmp.jpg"
                  alt="rela"
                  onClick={() => {
                    window.open('https://gmp.geniemusic.co.kr/');
                  }}
                />
              </div>
              <div className={style['contents']}>
                <div className={style['top']}>
                  <span
                    className={style['top-title']}
                    style={{ color: '#4775F6' }}
                  >
                    GMP
                  </span>
                  <span className={style['top-info']}>
                    지니뮤직 파트너들을 위한 분석 사이트
                  </span>
                </div>
                <div className={style['line']}></div>
                <div className={style['bottom']}>
                  <div className={style['bottom-title']}>내용</div>
                  <div className={style['bottom-info']}>
                    <span>
                      사용자 경험을 고려한 아이디어 제안 및 서비스 출시,
                      고도화진행
                    </span>
                    <span>Rechart를 사용한 데이터 시각화</span>
                    <span>recoil을 통한 전역 상태 관리</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Career;
