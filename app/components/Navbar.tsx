'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import React from 'react';
import Logo from '@/public/logo-shirin-original.png';
import { useTheme } from '@/context/ThemeProvider';
import Light from '@/public/sun.svg';
import Moon from '@/public/moon.svg';
import Link from 'next/link';
const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="flex justify-evenly w-full backdrop-blur-lg h-20 items-center fixed p-2">
      <Link href="/">
        <Image src={Logo} alt="logo-shirin" className="w-25 h-12" />
      </Link>
      <select
        name="language"
        id="language"
        className="bg-white-500 border-none rounded-lg p-2 outline-none"
      >
        <option value="en" className="rounded-lg p-2">
          English
        </option>
        <option value="fa" className="rounded-lg p-2">
          فارسی
        </option>
      </select>
      <ul className="flex justify-evenly w-sm font-bold text-sm text-dark-mode  dark:text-white-bg ">
        <motion.li whileHover={{ color: '#667d4f' }} className="cursor-pointer">
          <Link href="/">Home</Link>
        </motion.li>
        <motion.li whileHover={{ color: '#667d4f' }} className="cursor-pointer">
          <Link href="/about-us">About us</Link>
        </motion.li>
        <motion.li
          whileHover={{ color: '#667d4f' }}
          className="cursor-pointer "
        >
          <Link href="/project">Project</Link>
        </motion.li>
        <motion.li
          whileHover={{ color: '#667d4f' }}
          className="cursor-pointer "
        >
          <Link href="/contact">Contact</Link>
        </motion.li>
        {/* <li className="cursor-pointer hover:text-brand-dark"></li>
        <li className="cursor-pointer hover:text-green-light">About us</li>
        <li className="cursor-pointer hover:text-brand-dark ">Project</li>
        <li className="cursor-pointer hover:text-green-light">Contact</li> */}
      </ul>

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        onClick={toggleDarkMode}
      >
        <Image
          src={darkMode ? Light : Moon}
          alt="light"
          className="w-10 h-8 transition delay-500 duration-400 ease-in-out cursor-pointer"
        />
      </motion.button>

      <button className="bg-warning p-2 text-white-bg font-bold rounded cursor-pointer">
        Download Cv
      </button>
    </nav>
  );
};

export default Navbar;
