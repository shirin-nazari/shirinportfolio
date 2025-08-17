'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import React, { useState } from 'react';
import Logo from '@/public/logo-shirin-original.png';
import { useTheme } from '@/context/ThemeProvider';
import Light from '@/public/sun.svg';
import Moon from '@/public/moon.svg';
import Link from 'next/link';
import { useRouter, usePathname } from '@/src/i18n/navigation';
import { useTransition } from 'react';
import { useTranslations } from 'next-intl';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const t = useTranslations('navBar');
  const { darkMode, toggleDarkMode } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = useState('');
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const locale = e.target.value;
    startTransition(() => {
      router.replace({ pathname }, { locale });
    });
    setSelected(locale);
    localStorage.setItem('i18nextLng', selected);
  }
  return (
    <nav className="flex flex-row justify-evenly w-full backdrop-blur-lg h-20 items-center fixed p-2">
      <Link href="/">
        <Image src={Logo} alt="logo-shirin" className="w-25 h-12" />
      </Link>
      {/* desktop design*/}
      <div className="hidden md:flex justify-evenly basis-2/3 ">
        <select
          name="locale"
          onChange={onChange}
          defaultValue={pathname.startsWith('/fa') ? 'fa' : 'en'}
          // value={selected}
          id="language"
          disabled={isPending}
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
          <li>
            <Link
              href="/"
              className=" cursor-pointer hover:text-brand-dark-logo"
            >
              {t('home')}
            </Link>
          </li>

          <li>
            <Link
              href="/about-me"
              className="cursor-pointer  hover:text-brand-dark-logo"
            >
              {t('about-me')}
            </Link>
          </li>
          <li>
            <Link
              href="/project"
              className="cursor-pointer  hover:text-brand-dark-logo"
            >
              {t('project')}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="cursor-pointer  hover:text-brand-dark-logo "
            >
              {t('contact')}
            </Link>
          </li>
        </ul>

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          onClick={toggleDarkMode}
        >
          <Image
            src={darkMode ? Light : Moon}
            alt="light"
            className="w-10 h-8 transition delay-500 duration-400 ease-in-out cursor-pointer mx-1.5"
          />
        </motion.button>

        <button className="bg-warning p-2 text-white-bg font-bold rounded cursor-pointer mx-1">
          Download Cv
        </button>
      </div>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpenMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* mobile Design */}
      {isOpenMenu && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4">
          <h1>home</h1>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
