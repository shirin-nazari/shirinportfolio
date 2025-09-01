'use client';
import { motion } from 'motion/react';

const Experience = () => {
  return (
    <div className="h-lvh bg-white-500 w-full px-auto">
      <motion.h2
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible' }}
        className="font-bold text-2xl text-brand-dark-logo"
      >
        Experience
      </motion.h2>
    </div>
  );
};

export default Experience;
