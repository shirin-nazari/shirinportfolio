import Image from 'next/image';
import React from 'react';
import movie from '@/public/image1.png';
import game from '@/public/image2.png';
import gym from '@/public/image.png';

import Cards from './Cards';

const Projects = () => {
  return (
    <div className="flex flex-col items-center w-full h-full space-y-32">
      <h4 className="font-bold text-2xl">Projects</h4>
      <div className="flex flex-wrap md:flex-nowrap w-full  justify-evenly items-center">
        <Cards
          src={movie}
          title="projects 1"
          href="https://movies-theta-five.vercel.app/"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, aut!
        </Cards>
        <Cards
          src={game}
          title="projects 2"
          href="https://game-hub-five-cyan.vercel.app/"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, aut!
        </Cards>
        <Cards
          src={gym}
          title="projects 3"
          href="https://gym-typescript-ten-henna.vercel.app/"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, aut!
        </Cards>
      </div>
    </div>
  );
};

export default Projects;
