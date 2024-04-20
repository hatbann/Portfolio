'use client';

import Header from '@/components/Header';
import style from '../styles/page.module.scss';
import Skills from '@/components/Skills';
import Career from '@/components/Career';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro';
import { RefObject, useRef } from 'react';

export default function Home() {
  const introViewRef = useRef<HTMLDivElement>(null);
  const skillsViewRef = useRef<HTMLDivElement>(null);
  const careerViewRef = useRef<HTMLDivElement>(null);
  const projectsViewRef = useRef<HTMLDivElement>(null);
  const contactViewRef = useRef<HTMLDivElement>(null);

  const viewCategoryRefArr: { [name: string]: RefObject<HTMLDivElement> } = {
    introViewRef: introViewRef,
    skillsViewRef: skillsViewRef,
    careerViewRef: careerViewRef,
    projectsViewRef: projectsViewRef,
    contactViewRef: contactViewRef,
  };

  const handleScrollViews = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    viewCategoryRefArr[target.id].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <main className={style.main}>
      <Header handleCilck={handleScrollViews} />
      <div ref={introViewRef}>
        <Intro />
      </div>
      <div ref={skillsViewRef}>
        <Skills />
      </div>
      <div ref={careerViewRef}>
        <Career />
      </div>

      <div ref={projectsViewRef}>
        <Projects />
      </div>
      <div ref={contactViewRef}>
        <Contact />
      </div>
    </main>
  );
}
