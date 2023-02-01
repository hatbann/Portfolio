import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './css/CustomSlider.module.css';
import Project from './Project';

export const StyledSlider = styled(Slider)`
  height: 280px; //슬라이드 컨테이너 영역

  .slick-list {
    //슬라이드 스크린
    width: 70vw;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    margin-top: 30px;
  }

  .slick-slide {
    width: 100%;
  }

  .slick-dots {
    //슬라이드의 위치
    margin-top: 70px;
  }

  .slick-track {
    //이건 잘 모르겠음
    width: 100%;
    height: 100%;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #c2e9ff;
  }
  .slick-prev:before, .slick-next:before{
    font-size: 25px;
  }
`;

const CustomSlider = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div>
      <StyledSlider {...settings} className={styles.slider}>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </StyledSlider>
    </div>
  );
};

export default CustomSlider;
