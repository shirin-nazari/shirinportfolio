import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const SocialMedia = () => {
  return (
    <div className="flex w-3xs justify-evenly items-center text-logo ">
      <Link
        href="https://www.instagram.com/shirin._.nh/#"
        target="_blank"
        className="hover:text-brand-dark-logo"
      >
        <FaInstagram className="w-6 h-6 " />
      </Link>
      <Link
        href="https://www.linkedin.com/in/shirin-nazari/"
        target="_blank"
        className="hover:text-brand-dark-logo"
      >
        <FaLinkedin className="w-6 h-6 " />
      </Link>
      <Link
        href="https://github.com/shirin-nazari"
        target="_blank"
        className="hover:text-brand-dark-logo"
      >
        <FaGithub className="w-6 h-6 " />
      </Link>
      <Link
        href="https://t.me/shirin_nh80"
        target="_blank"
        className="hover:text-brand-dark-logo"
      >
        <FaTelegram className="w-6 h-6 " />
      </Link>
    </div>
  );
};

export default SocialMedia;
