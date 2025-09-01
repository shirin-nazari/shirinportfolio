import Experience from './components/Experience';
import { Hero } from './components/Hero';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div className=" dark:text-white-bg min-h-screen flex flex-col justify-center items-center pt-25 ">
      <Hero />
      <Experience />
      <Skills />
    </div>
  );
}
