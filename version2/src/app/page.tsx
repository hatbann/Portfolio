import Header from '@/components/Header';
import style from '../styles/page.module.scss';
import Skills from '@/components/Skills';
import Career from '@/components/Career';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro';

export default function Home() {
  return (
    <main className={style.main}>
      <Header />
      <Intro />
      <Skills />
      <Career />
      <Projects />
      <Contact />
    </main>
  );
}
