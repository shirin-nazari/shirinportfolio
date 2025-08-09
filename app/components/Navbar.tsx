'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/public/logo-shirin-original.png';
import { useTheme } from '@/context/ThemeProvider';
import Light from '@/public/sun.svg';
import Moon from '@/public/moon.svg';
const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="flex justify-evenly w-full backdrop-blur-lg h-20 items-center fixed p-2">
      <Image src={Logo} alt="logo-shirin" className="w-25 h-12" />
      <ul className="flex justify-evenly w-xl font-bold text-sm text-dark-mode  dark:text-white-bg ">
        <li className="cursor-pointer hover:text-brand-dark ">Home</li>
        <li className="cursor-pointer hover:text-green-light">About us</li>
        <li className="cursor-pointer hover:text-brand-dark ">Project</li>
        <li className="cursor-pointer hover:text-green-light">Contact</li>
      </ul>
      {/* btn-[#FEA405} text-white font-bold */}

      <button onClick={toggleDarkMode} className="">
        <Image
          src={darkMode ? Light : Moon}
          alt="light"
          className="w-10 h-8 transition delay-500 duration-400 ease-in-out cursor-pointer"
        />
      </button>
      <button className="bg-warning p-2 text-white font-bold rounded cursor-pointer">
        Download Cv
      </button>
    </nav>
  );
};

export default Navbar;
