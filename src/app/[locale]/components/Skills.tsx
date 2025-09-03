'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

function Skills() {
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
    <div className="">
      <h4>skills</h4>
      <div className="flex size-full items-center justify-center bg-background gap-10">
        <Marquee className="w-full h-full">
          {loop.map((item, index) => (
            <Image
              src={item.src}
              alt={item.alt}
              key={index}
              width={100}
              height={100}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
