'use client';
import { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  console.log(visible);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className="w-full bg-green-light dark:bg-dark-footer py-6 mt-12 flex flex-row items-center">
      {visible && (
        <button
          onClick={scrollToTop}
          className="mx-4 p-2 text-3xl  bg-gradient-to-r from-secondary to-logo  text-white rounded-full shadow hover:bg-brand-dark transition-all"
        >
          <MdOutlineKeyboardDoubleArrowUp />
        </button>
      )}{' '}
      <div className="mx-auto w-full px-4 flex flex-col md:flex-row items-center justify-evenly gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ©{new Date().getFullYear()} Shirin Nazari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
