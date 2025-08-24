import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import shirin from '@/public/shirin-nazari-bg.jpg';

export const Hero = () => {
  const t = useTranslations('homePage');
  return (
    <div className="flex items-center">
      <div>
        {' '}
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </div>
      <Image alt="profile" src={shirin} className="h-sm w-sm rounded-4xl" />
    </div>
  );
};
