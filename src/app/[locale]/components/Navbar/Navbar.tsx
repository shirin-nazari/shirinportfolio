'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/public/logo-shirin-original.png';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <nav className="flex flex-row justify-evenly w-full backdrop-blur-lg h-20 items-center fixed p-2">
      <Link href="/">
        <Image src={Logo} alt="logo-shirin" className="w-25 h-12" />
      </Link>
      {/* desktop design*/}
      <div className="hidden md:flex justify-evenly basis-2/3 ">
        <LanguageSwitcher className="bg-white-500 " />
        <NavLinks />
        <ThemeToggle />
        <button className="bg-warning p-2 text-white-bg font-bold rounded cursor-pointer mx-1">
          Download Cv
        </button>
      </div>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden text-dark-mode  dark:text-white-bg">
        <button onClick={toggleMenu}>
          {isOpenMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* mobile Design */}
      {isOpenMenu && (
        <div className="md:hidden absolute top-full left-0 w-full h-full bg-primary-50  p-4">
          <MobileNavbar />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
