import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import shirin from '@/public/shirin-nazari-bg.jpg';

export const Hero = () => {
  const t = useTranslations('homePage');
  const title = t('title').split(' ');
  return (
    <div className="flex items-center w-full justify-between flex-wrap-reverse">
      <div className="w-1/2">
        {' '}
        <h2 className="text-secondary font-bold">{t('name')}</h2>
        <h1 className="font-bold text-3xl pb-2 w-xs text-logo">{title[0]}</h1>
        <h2 className="font-bold text-4xl pb-2 w-xs text-logo ml-20">
          {title[1]}
        </h2>
        <p>{t('description')}</p>
      </div>
      <div className="w-lg h-lg rounded-full bg-gradient-to-r from-warning to-logo ">
        <Image
          alt="profile"
          src={shirin}
          className="h-sm w-sm rounded-full p-2"
        />
        <p></p>
      </div>
    </div>
  );
};
