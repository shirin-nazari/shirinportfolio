import { useTheme } from '@/context/ThemeProvider';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Light from '@/public/sun.svg';
import Moon from '@/public/moon.svg';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

const MobileNavbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const t = useTranslations('navBar');

  const links = [
    { href: '/', label: t('home') },
    { href: '#about-me', label: t('about-me') },
    { href: '#project', label: t('project') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <div className=" flex flex-col p-2">
      <ul className="w-full font-bold text-sm text-dark-mode  dark:text-white-bg ">
        {links.map((link) => (
          <li key={link.href} className="p-2">
            <Link
              href={link.href}
              className="cursor-pointer  hover:text-brand-dark-logo w-full"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-6/12 p-2">
        <LanguageSwitcher
          className="bg-transparent border-none outline-none font-bold text-sm w-full"
          classNameChild=" text-dark-mode bg-primary-50"
        />
      </div>
      <div className="flex p-2">
        <Image
          onClick={toggleDarkMode}
          src={darkMode ? Light : Moon}
          alt="light"
          className="w-10 h-8 transition delay-500 duration-400 ease-in-out cursor-pointer "
        />
        <p
          className=" text-dark-mode font-bold text-sm mx-1.5 dark:text-white-bg"
          onClick={toggleDarkMode}
        >
          {darkMode ? t('lightMode') : t('darkMode')}
        </p>
      </div>
    </div>
  );
};

export default MobileNavbar;
