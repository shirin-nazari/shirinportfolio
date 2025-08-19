import { useTheme } from '@/context/ThemeProvider';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useTransition } from 'react';
import Light from '@/public/sun.svg';
import Moon from '@/public/moon.svg';
import Image from 'next/image';
import { usePathname, useRouter } from '@/src/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

const MobileNavbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const t = useTranslations('navBar');

  const links = [
    { href: '/', label: t('home') },
    { href: '/about-me', label: t('about-me') },
    { href: '/project', label: t('project') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <div className="h-full w-full flex flex-col backdrop-blur-lg">
      <ul className="w-full font-bold text-sm text-dark-mode  dark:text-white-bg ">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="cursor-pointer  hover:text-brand-dark-logo w-full"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <LanguageSwitcher />
      </div>
      <div>
        <Image
          onClick={toggleDarkMode}
          src={darkMode ? Light : Moon}
          alt="light"
          className="w-10 h-8 transition delay-500 duration-400 ease-in-out cursor-pointer mx-1.5"
        />
        {darkMode ? t('lightMode') : t('darkMode')}
      </div>
    </div>
  );
};

export default MobileNavbar;
