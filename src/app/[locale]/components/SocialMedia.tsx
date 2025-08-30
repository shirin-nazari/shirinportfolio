import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const SocialMedia = () => {
  return (
    <div className="flex w-3xs justify-evenly items-center text-logo ">
      <Link href="https://www.instagram.com/shirin._.nh/#" target="_blank">
        <FaInstagram className="w-6 h-6 " />
      </Link>
      <Link href="https://www.linkedin.com/in/shirin-nazari/" target="_blank">
        <FaLinkedin className="w-6 h-6 " />
      </Link>
      <Link href="https://github.com/shirin-nazari" target="_blank">
        <FaGithub className="w-6 h-6 " />
      </Link>
      <Link href="https://t.me/shirin_nh80" target="_blank">
        <FaTelegram className="w-6 h-6 " />
      </Link>
    </div>
  );
};

export default SocialMedia;
