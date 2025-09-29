'use client';
import Education from './components/Education';
import EmailTemplate from './components/EmailTemplate';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { Hero } from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div className=" dark:text-white-bg min-h-screen flex flex-col justify-center items-center pt-25 ">
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <EmailTemplate />
      <Footer />
    </div>
  );
}
