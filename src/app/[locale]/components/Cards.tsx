import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface PropsCard {
  children: ReactNode;
  src: StaticImageData;
  title: string;
  href: string;
}

const Cards = ({ children, src, title, href }: PropsCard) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden blur-in-3xl shadow-lg">
      <Image
        className="w-full h-fit rounded-2xl"
        src={src}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className=" text-base">{children}</p>
        <Link href={href} target="_blank" className="text-primary text-lg">
          {title}
        </Link>
      </div>
    </div>
  );
};

export default Cards;
