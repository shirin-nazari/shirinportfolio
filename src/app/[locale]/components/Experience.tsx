'use client';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

const Experience = () => {
  const t = useTranslations('experience');
  const paragraph = t('working')
    .split('.')
    .filter((item) => item.trim() !== '');
  return (
    <div className="h-full w-full bg-green-light/70  py-20 flex flex-col items-center ">
      <motion.h2
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible' }}
        className="font-bold text-2xl text-brand-dark-logo"
      >
        {t('name')}
      </motion.h2>
      <div className=" pt-10 ">
        <div className="flex justify-between items-center flex-wrap">
          <h4 className="font-bold text-lg ">{t('nameAndJob')}</h4>
          <h5>{t('time')}</h5>
        </div>
        <ul className="list-disc  h-full text-lg leading-12 p-6">
          {paragraph.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
