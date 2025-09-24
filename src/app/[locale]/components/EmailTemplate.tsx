'use client';
import { useTranslations } from 'next-intl';
import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const EmailTemplate = () => {
  const t = useTranslations('Contact');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });
      setLoading(false);
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else setStatus('error');
    } catch (err) {
      setStatus('error');
      console.error(err);
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 8000);
    }
  };
  return (
    <div
      id="contact"
      className="w-full h-full  py-20 flex flex-col items-center space-y-16 flex-wrap md:flex-nowrap "
    >
      <h4 className="font-bold text-2xl">{t('name')}</h4>
      <div className="w-full h-full flex justify-evenly flex-wrap md:flex-nowrap ">
        <div className="w-lg m-4 md:m-1">
          <p className="font-semibold">{t('description')}</p>
          <div className="flex flex-col gap-4 py-2">
            <Link
              href="https://www.instagram.com/shirin._.nh/#"
              target="_blank"
              className="flex gap-8 bg-gradient-to-r from-secondary/20 to-logo/20  hover:from-secondary/35 hover:to-logo/35  rounded-2xl w-xs font-semibold p-4"
            >
              <FaInstagram className="w-6 h-6 text-logo hover:text-brand-dark-logo" />
              shirin._.nh
            </Link>
            <Link
              href="https://www.linkedin.com/in/shirin-nazari/"
              target="_blank"
              className="flex gap-8 bg-gradient-to-r from-secondary/20 to-logo/20 hover:from-secondary/35 hover:to-logo/35  rounded-2xl w-xs font-semibold p-4"
            >
              <FaLinkedin className="w-6 h-6 text-logo  hover:text-brand-dark-logo" />
              shirin-nazari
            </Link>
            <Link
              href="https://github.com/shirin-nazari"
              target="_blank"
              className="flex gap-8 bg-gradient-to-r from-secondary/20 to-logo/20  hover:from-secondary/35 hover:to-logo/35  rounded-2xl w-xs font-semibold p-4"
            >
              <FaGithub className="w-6 h-6 text-logo  hover:text-brand-dark-logo" />
              shirin-nazari
            </Link>
            <Link
              href="https://t.me/shirin_nh80"
              target="_blank"
              className="flex gap-8 bg-gradient-to-r from-secondary/20 to-logo/20  hover:from-secondary/35 hover:to-logo/35  rounded-2xl w-xs font-semibold p-4"
            >
              <FaTelegram className="w-6 h-6 text-logo  hover:text-brand-dark-logo" />
              shirin_nh80
            </Link>
            <Link
              href="mailto:shirinnazari.h@gmail.com"
              target="_blank"
              className="flex gap-8 bg-gradient-to-r from-secondary/20 to-logo/20  hover:from-secondary/35 hover:to-logo/35  rounded-2xl w-xs font-semibold p-4"
            >
              <SiGmail className="w-6 h-6 text-logo  hover:text-brand-dark-logo" />
              Shirinnazari.h@gmail.com
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 max-w-lg  bg-gradient-to-r from-secondary/10 to-logo/10 rounded-2xl w-full p-12 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            className="border-2 border-brand-light p-3 rounded-md  focus:outline-blue-200/50"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="border-2 border-brand-light p-3 rounded-md  focus:outline-blue-200/50"
            required
          />
          <textarea
            name="message"
            placeholder="your message "
            className="border-2 border-brand-light p-3 rounded-md  focus:outline-blue-200/50"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-brand-dark-logo text-white py-2 rounded-md hover:font-semibold hover:bg-logo"
          >
            {loading ? 'Sending..' : 'Send'}
          </button>{' '}
          {status === 'success' && (
            <div
              className="w-full p-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <span className="font-medium">Success!</span> Your message has
              been sent successfully🎉
            </div>
          )}
          {status === 'error' && (
            <div
              className="w-full p-4  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">Error!</span>Something went
              wrong,Please try again.
            </div>
          )}
        </form>{' '}
      </div>
    </div>
  );
};

export default EmailTemplate;
