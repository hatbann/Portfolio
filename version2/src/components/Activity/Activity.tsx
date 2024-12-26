import React, { RefObject, useRef, useState } from 'react';
import style from '../../styles/activity/activity.module.scss';
import Box from './Box';

export type ActivityType = {
  title: string;
  img: string | undefined;
  contents: string[];
  link?: string;
};

type ActivitiyListType = 'edu' | 'project' | 'cert';

const EducationList: ActivityType[] = [
  {
    title: 'SeSAC',
    img: '/images/png/sesac.png',
    contents: ['2022.10 ~ 2023.03', '웹 풀스택 과정 수료'],
  },
  {
    title: '코테이토',
    img: '/images/png/cotato.png',
    contents: [
      '1기 : Html/Css 기초 웹 프로그래밍 스터디 조장',
      '3기 : 리액트 스터디 참여',
    ],
  },
  {
    title: '홍익대학교',
    img: '/images/png/hongik.png',
    contents: ['2018.03 ~ 2023.02', '시각디자인과 전공/컴퓨터공학과 복수전공'],
  },
];

const ProjectList: ActivityType[] = [
  {
    title: '오늘의 도시락',
    img: '/images/png/lunch.png',
    contents: [
      '2024.08.21 ~ 2024.10.11',
      'ssr을 통한 seo 개선',
      '도시락, 레시피 업로드 시 이미지는 aws s3에 저장하고 경로를 mongodb에 저장',
      ' jwt token을 통해 회원관리',
      '무한스크롤과 페이지 네이션 적용',
    ],
    link: 'https://todayslunch.vercel.app',
  },
  {
    title: 'Zerowave',
    img: '/images/png/zerowave.png',
    contents: [
      '2024.05.19 ~ 2024.08.27',
      'recoil과 token을 이용한 회원관리',
      '카카오 지도 api와 geoloaction을 활용해 유저 위치 기반 지도 노출',
      'next.js의 middleware를 통해 접근 가능 페이지 관리',
    ],
    link: 'https://zerowave.vercel.app',
  },
  {
    title: 'Portforlio',
    img: '/images/png/mainLogo.png',
    contents: [
      'Nav바에서 카테고리 클릭 시 해당 섹션으로 자동 스크롤 이벤트 구현',
      'swiper등 과 같은 여러 애니메이션 기능',
    ],
  },
  {
    title: '독스북스',
    img: '/images/png/dogsbooks.png',
    contents: [
      '2022.08 ~ 2022.12',
      'firebase를 이용한 유저 관리',
      '알라딘 API를 활용한 도서 목록 추출',
    ],
    link: 'https://hatbann.github.io/dogsbooks/',
  },
];

const CertificationList: ActivityType[] = [
  {
    title: '정보처리기사',
    img: undefined,
    contents: ['한국산업인력공단', '2022.06'],
  },
];
const Activity = () => {
  const [activityTitle, setActivityTitle] =
    useState<ActivitiyListType>('project');

  const ProjectRef = useRef<HTMLDivElement>(null);
  const EducationRef = useRef<HTMLDivElement>(null);
  const CertificationRef = useRef<HTMLDivElement>(null);
  const ContentsRef = useRef<HTMLDivElement>(null);

  const refArr: RefObject<HTMLDivElement>[] = [
    ProjectRef,
    EducationRef,
    CertificationRef,
  ];

  const scrollToSection = (elementRef: HTMLDivElement, e: React.MouseEvent) => {
    const offsetTop = elementRef.offsetTop;
    ContentsRef.current?.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className={style['container']}>
      <h1 className={style['title']}>Activity</h1>
      <div className={style['main']}>
        <div className={style['nav']}>
          <h2
            className={activityTitle === 'project' ? `${style['focus']}` : ''}
            onClick={(e) => {
              setActivityTitle('project');
              scrollToSection(refArr[0].current!, e);
            }}
          >
            Project
          </h2>
          <h2
            className={activityTitle === 'edu' ? `${style['focus']}` : ''}
            onClick={(e) => {
              setActivityTitle('edu');
              scrollToSection(refArr[1].current!, e);
            }}
          >
            Education
          </h2>
          <h2
            className={activityTitle === 'cert' ? `${style['focus']}` : ''}
            onClick={(e) => {
              setActivityTitle('cert');
              scrollToSection(refArr[2].current!, e);
            }}
          >
            Certification
          </h2>
        </div>
        <section
          className={style['contents']}
          ref={ContentsRef}
          onWheel={(e) => e.preventDefault()} /* 스크롤 막기 */
        >
          <div ref={ProjectRef} className={style['wrapper']}>
            <div className={style['content']}>
              {ProjectList.map((project, idx) => {
                return <Box item={project} />;
              })}
            </div>
          </div>
          <div ref={EducationRef} className={style['wrapper']}>
            <div className={style['content']}>
              {EducationList.map((edu, idx) => {
                return <Box item={edu} />;
              })}
            </div>
          </div>
          <div ref={CertificationRef} className={style['wrapper']}>
            <div className={style['content']}>
              {CertificationList.map((cert, idx) => {
                return <Box item={cert} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Activity;
