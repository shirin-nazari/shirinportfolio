'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import React from 'react';
import Logo from '@/public/logo-shirin-original.png';
import { useTheme } from '@/context/ThemeProvider';
import Light from '@/public/sun.svg';
import Moon from '@/public/moon.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <nav className="flex justify-evenly w-full backdrop-blur-lg h-20 items-center fixed p-2">
      <Link href="/">
        <Image src={Logo} alt="logo-shirin" className="w-25 h-12" />
      </Link>
      <select
        name="locale"
        id="language"
        className="bg-white-500 border-none rounded-lg p-2 outline-none"
      >
        <Link href="\" locale="en" passHref>
          <option value="en" className="rounded-lg p-2">
            English
          </option>
        </Link>
        <Link href="\" locale="fa" passHref>
          <option value="fa" className="rounded-lg p-2">
            فارسی
          </option>
        </Link>
      </select>
      <ul className="flex justify-evenly w-sm font-bold text-sm text-dark-mode  dark:text-white-bg ">
        <li>
          <Link href="/" className=" cursor-pointer hover:text-brand-dark-logo">
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about-us"
            className="cursor-pointer  hover:text-brand-dark-logo"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            href="/project"
            className="cursor-pointer  hover:text-brand-dark-logo"
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="cursor-pointer  hover:text-brand-dark-logo "
          >
            Contact
          </Link>
        </li>
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
