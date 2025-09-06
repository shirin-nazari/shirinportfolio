'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

function Skills() {
  const t = useTranslations('Skills');
  const items = [
    { src: '/icons/html.png', alt: 'html' },
    { src: '/icons/css.png', alt: 'css' },
    { src: '/icons/bootstrap-fill-svgrepo-com.svg', alt: 'bootstrap' },
    { src: '/icons/js.png', alt: 'js' },
    { src: '/icons/ts.png', alt: 'ts' },
    { src: '/icons/Git_icon.svg.png', alt: 'git' },
    { src: '/icons/github.png', alt: 'github' },
    { src: '/icons/tailwind_css.png', alt: '/tailwind_css' },
    { src: '/icons/React-icon.svg.png', alt: 'React' },
    { src: '/icons/redux-logo.svg', alt: 'redux' },
    { src: '/icons/nextjs-icon.svg', alt: 'next' },
    { src: '/icons/figma.png', alt: 'figma' },
  ];
  const loop = [...items, ...items];
  return (
    // <div className=" w-full bg-white-500/90 flex flex-col items-center py-12">
    <div className=" w-full flex flex-col items-center py-12">
      <h4 className="font-bold text-secondary text-2xl pb-10">{t('name')}</h4>

      <div className="flex size-full items-center justify-center gap-10 backdrop-blur-3xl bg-secondary/4">
        <Marquee className="w-full h-full gap-4 z-10">
          {loop.map((item, index) => (
            <Image
              src={item.src}
              alt={item.alt}
              key={index}
              width={90}
              height={90}
              className="px-2"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
