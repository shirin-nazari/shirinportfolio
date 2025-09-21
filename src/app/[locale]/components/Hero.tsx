'use client';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
// import shirin from '@/public/shirin-nazari-bg.jpg';
import shirin from '@/public/shirin-nazari.png';
import SocialMedia from './SocialMedia';

export const Hero = () => {
  const t = useTranslations('homePage');
  const title = t('title').split(' ');
  const locale = useLocale();
  const direction = locale === 'en' ? 'ltr' : 'rtl';

  return (
    <div
      id="aboutme"
      className="flex items-center w-full min-h-lvh justify-center space-x-2 md:space-x-11 flex-wrap-reverse "
    >
      <div className="w-fit p-8 md:px-2">
        {' '}
        <h2 className="text-secondary font-bold">{t('name')}</h2>
        <h1 className="font-bold text-3xl pb-2 text-logo">{title[0]}</h1>
        <h2
          className={`font-bold text-4xl pb-2 text-logo ${
            direction == 'ltr' ? 'ml-20' : 'mr-20'
          }`}
        >
          {title[1]}
        </h2>
        <div className="font-semibold w-fit md:w-lg text-justify ">
          {t('description')}
        </div>
      </div>
      <div className="h-full flex flex-col items-center justify-center  space-y-4">
        <div className="w-fit h-lg rounded-full bg-gradient-to-r from-warning to-logo">
          <div className="bg-white-bg w-sm h-fit rounded-full m-2 dark:bg-dark-mode">
            <Image
              alt="profile"
              src={shirin}
              className="h-sm w-sm  rounded-full z-20"
            />
          </div>
          {/* <Image
          alt="profile"
          src={shirin}
          className="h-sm w-sm  rounded-full p-2"
        /> */}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};
