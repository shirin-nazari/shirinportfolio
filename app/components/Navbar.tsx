'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/public/logo-shirin-original.png';
import Light from '@/public/lightmode.png';
import Moon from '@/public/darkmode.png';
const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };
  return (
    <nav className="flex justify-evenly w-full backdrop-blur-lg h-20 items-center fixed">
      <Image src={Logo} alt="logo-shirin" className="w-25 h-12" />
      <ul className="flex justify-evenly w-sm font-bold text-lg dark:text-white-bg ">
        <li className="hover:text-brand-dark hover:text-xl">Home</li>
        <li className="hover:text-brand-dark hover:text-xl">About us</li>
        <li className="hover:text-brand-dark hover:text-xl">Project</li>
        <li className="hover:text-brand-dark hover:text-xl">Contact</li>
        <button className="bg-primary" onClick={toggleTheme}>
          <Image
            src={theme === 'light' ? Moon : Light}
            alt="light"
            className="w-10 h-10"
          />
        </button>
      </ul>
      {/* btn-[#FEA405} text-white font-bold */}
      <button className="bg-warning p-2 text-white font-bold rounded">
        Download Cv
      </button>
    </nav>
  );
};

export default Navbar;
