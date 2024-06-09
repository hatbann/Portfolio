'use client';

import Header from '@/components/Header';
import style from '../styles/page.module.scss';
import Skills from '@/components/Skills';
import Career from '@/components/Career';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro/Intro';
import { RefObject, useEffect, useRef, useState, createContext } from 'react';

export type tabNames = 'intro' | 'skills' | 'career' | 'project' | 'contact';

export type DarkmodeType = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DarkmodeContext = createContext<DarkmodeType>({
  isDark: false,
  setIsDark: () => {},
});

export default function Home() {
  const introViewRef = useRef<HTMLDivElement>(null);
  const skillsViewRef = useRef<HTMLDivElement>(null);
  const careerViewRef = useRef<HTMLDivElement>(null);
  const projectsViewRef = useRef<HTMLDivElement>(null);
  const contactViewRef = useRef<HTMLDivElement>(null);

  const refArr: RefObject<HTMLDivElement>[] = [
    introViewRef,
    skillsViewRef,
    careerViewRef,
    projectsViewRef,
    contactViewRef,
  ];

  const [tabName, setTabName] = useState<tabNames>('intro');
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', checkTabName);
    return () => {
      window.removeEventListener('scroll', checkTabName);
    };
  }, []);

  function checkTabName() {
    const yOffset = window.pageYOffset;
    if (yOffset! >= 0 && yOffset < skillsViewRef.current?.offsetTop! * 0.5) {
      setTabName('intro');
    } else if (
      yOffset! >= skillsViewRef.current?.offsetTop! * 0.5 &&
      yOffset! <= careerViewRef.current?.offsetTop! * 0.6
    ) {
      setTabName('skills');
    } else if (
      yOffset! >= careerViewRef.current?.offsetTop! * 0.6 &&
      yOffset! <= projectsViewRef.current?.offsetTop! * 0.7
    ) {
      setTabName('career');
    } else if (
      yOffset! >= projectsViewRef.current?.offsetTop! * 0.6 &&
      yOffset! <= contactViewRef.current?.offsetTop! * 0.7
    ) {
      setTabName('project');
    } else {
      setTabName('contact');
    }
  }

  const scrollToSection = (elementRef: HTMLDivElement, e: React.MouseEvent) => {
    window.scrollTo({
      top: elementRef.offsetTop - 100,
      behavior: 'smooth',
    });
  };

  return (
    <DarkmodeContext.Provider value={{ isDark, setIsDark }}>
      <main
        className={
          !isDark ? style['main'] : `${style['main']} ${style['dark']}`
        }
      >
        <Header
          handleCilck={scrollToSection}
          refArr={refArr}
          tabName={tabName}
        />
        <div ref={introViewRef} className={style['wrapper']}>
          <Intro />
        </div>
        <div ref={skillsViewRef} className={style['wrapper']}>
          <Skills />
        </div>
        <div ref={careerViewRef} className={style['wrapper']}>
          <Career />
        </div>

        <div ref={projectsViewRef} className={style['wrapper']}>
          <Projects />
        </div>
        <div ref={contactViewRef} className={style['wrapper']}>
          <Contact />
        </div>
      </main>
    </DarkmodeContext.Provider>
  );
}
