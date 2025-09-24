import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ImLink } from 'react-icons/im';

interface PropsCard {
  children: ReactNode;
  src: StaticImageData;
  title: string;
  href: string;
  hrefGithub: string;
}

const Cards = ({ children, src, title, href, hrefGithub }: PropsCard) => {
  return (
    <div className="max-w-sm h-full rounded-2xl overflow-hidden blur-in-3xl shadow-lg">
      <Image
        className="w-full h-fit rounded-2xl"
        src={src}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className=" text-base">{children}</p>

        <button className=" bg-brand-light p-2 px-4 my-2 rounded-2xl shadow-md dark:bg-dark-footer">
          <Link
            href={href}
            target="_blank"
            className="text-brand-dark-logo text-lg font-bold flex justify-baseline gap-2 items-center"
          >
            <ImLink className="text-blue-500 text-xl" /> Live Demo
          </Link>
        </button>

        <button className="bg-brand-light p-2 px-4 m-2 rounded-2xl shadow-md dark:bg-dark-footer">
          <Link
            target="_blank"
            className="text-brand-dark-logo text-lg font-bold flex justify-baseline gap-2 items-center"
            href={hrefGithub}
          >
            <FaGithub className="text-purple-500/80 text-xl" />
            GitHub
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Cards;
