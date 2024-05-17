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
                <img src="/images/png/rela.png" alt="rela" />
              </div>
              <div className={style['contents']}>
                <div className={style['top']}>
                  <span>Re:La</span>
                  <span>AI를 통해 악보를 생성하고 공유하는 서비스</span>
                </div>
                <div className={style['bottom']}>
                  <div className={style['bottom-title']}>내용</div>
                  <div>
                    <span>서비스 출시, 리뉴얼 및 고도화진행</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>2</SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Career;
