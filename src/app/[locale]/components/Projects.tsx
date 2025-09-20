import React from 'react';
import movie from '@/public/image1.png';
import game from '@/public/image2.png';
import gym from '@/public/image.png';

import Cards from './Cards';
import { useTranslations } from 'next-intl';

const Projects = () => {
  const t = useTranslations('Projects');
  const items = [
    {
      title: t('movie.title'),
      description: t('movie.description'),
      link: t('movie.link'),
      src: movie,
    },
    {
      title: t('game.title'),
      description: t('game.description'),
      link: t('game.link'),
      src: game,
    },
    {
      title: t('gym.title'),
      description: t('gym.description'),
      link: t('gym.link'),
      src: gym,
    },
  ];
  return (
    <div className="flex flex-col items-center w-full h-full space-y-32">
      <h4 className="font-bold text-2xl">{t('name')}</h4>
      <div className="flex flex-wrap gap-4 md:flex-nowrap w-full  justify-evenly items-center">
        {items.map((item, index) => (
          <Cards
            key={index}
            src={item.src}
            title={item.title.toUpperCase()}
            href={item.link}
          >
            {item.description}
          </Cards>
        ))}
      </div>
    </div>
  );
};

export default Projects;
