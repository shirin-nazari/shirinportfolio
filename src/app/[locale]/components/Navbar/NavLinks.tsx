import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
  const t = useTranslations('navBar');
  const links = [
    { href: '/', label: t('home') },
    { href: '/about-me', label: t('about-me') },
    { href: '/project', label: t('project') },
    { href: '/contact', label: t('contact') },
  ];
  return (
    <ul className="flex justify-evenly w-sm font-bold text-sm items-center text-dark-mode  dark:text-white-bg ">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="cursor-pointer  hover:text-brand-dark-logo"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
