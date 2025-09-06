import { useTranslations } from 'next-intl';
import React from 'react';

const Education = () => {
  const t = useTranslations('Education');
  const items = [
    {
      title: t('neishabour.title'),
      time: t('neishabour.time'),
      description: t('neishabour.description'),
    },
    {
      title: t('apisinals.title'),
      time: t('apisinals.time'),
      description: t('apisinals.description'),
    },
  ];
  return (
    <div className="h-full py-20 w-[80%] flex items-center justify-center space-x-16 flex-wrap md:flex-nowrap">
      <h4 className="font-bold text-2xl pb-10 md:pb-0">{t('name')}</h4>
      <div className="h-[400px]  bg-secondary w-[8px] hidden md:flex"></div>
      <div className="flex flex-col space-y-8 ">
        {items.map((item, index) => (
          <div className="flex justify-evenly flex-wrap" key={index}>
            <div className="w-full md:w-[70%]">
              <h5 className="font-bold">{item.title}</h5>
              {item.description}
            </div>
            <p>{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
