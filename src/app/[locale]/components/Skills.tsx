import React from 'react';
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiNextdotjs, SiRedux, SiTypescript } from 'react-icons/si';

function Skills() {
  return (
    <div className="h-lvh w-full bg-primary/95">
      <SiNextdotjs />
      <FaReact />
      <FaGitAlt />
      <FaGithub />
      <FaHtml5 />
      <FaCss3Alt />
      <IoLogoJavascript />
      <SiTypescript />
      <FaBootstrap />
      <RiTailwindCssFill />
      <SiRedux />
      <FaFigma />
    </div>
  );
}

export default Skills;
