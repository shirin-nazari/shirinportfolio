import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
// import shirin from '@/public/shirin-nazari-bg.jpg';
import shirin from '@/public/shirin-nazari.png';

export const Hero = () => {
  const t = useTranslations('homePage');
  const title = t('title').split(' ');
  return (
    <div className="flex items-center w-full h-full justify-evenly flex-wrap-reverse">
      <div className="w-fit">
        {' '}
        <h2 className="text-secondary font-bold">{t('name')}</h2>
        <h1 className="font-bold text-3xl pb-2 w-xs text-logo">{title[0]}</h1>
        <h2 className="font-bold text-4xl pb-2 w-xs text-logo ml-20">
          {title[1]}
        </h2>
        <p className="font-semibold w-lg">{t('description')}</p>
      </div>
      <div className="w-fit h-lg rounded-full bg-gradient-to-r from-warning to-logo ">
        <div className="bg-white-bg w-sm h-sm rounded-full m-2 dark:bg-dark-mode">
          <Image
            alt="profile"
            src={shirin}
            className="h-xl w-sm  rounded-full z-20"
          />
        </div>
        {/* <Image
          alt="profile"
          src={shirin}
          className="h-sm w-sm  rounded-full p-2"
        /> */}
      </div>
    </div>
  );
};
