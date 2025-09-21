'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeProvider';
import Light from '@/public/sun.svg';
import Moon from '@/public/moon.svg';
import { motion } from 'motion/react';
import Image from 'next/image';
const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
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
  );
};

export default ThemeToggle;
