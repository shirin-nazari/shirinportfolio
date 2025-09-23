'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from '@/src/i18n/navigation';
import { useTransition } from 'react';

interface ClassNameProps {
  className?: string;
  classNameChild?: string;
}
const LanguageSwitcher = ({ className, classNameChild }: ClassNameProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = useState<'fa' | 'en'>('en');

  useEffect(() => {
    const stored = localStorage.getItem('i18nextLng') as 'fa' | 'en' | null;
    if (stored) {
      setSelected(stored);
    } else if (pathname.startsWith('/fa')) {
      setSelected('fa');
    } else {
      setSelected('en');
    }
  }, [pathname]);
  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const locale = e.target.value as 'fa' | 'en';
    setSelected(locale);
    localStorage.setItem('i18nextLng', locale);

    startTransition(() => {
      router.replace({ pathname }, { locale });
    });
  }
  return (
    <select
      name="locale"
      onChange={onChange}
      value={selected}
      id="language"
      disabled={isPending}
      className={`border-none rounded-lg p-3 outline-none ${className}  text-sm text-dark-mode  bg-transparent focus:ring-green-light dark:bg-dark-mode  dark:placeholder-gray-400 dark:text-white-bg dark:focus:ring-green-light `}
      // className={`border-none rounded-lg p-3 outline-none ${className}  text-sm text-dark-mode  bg-transparent focus:ring-transparent dark:bg-transparent  dark:placeholder-gray-400 dark:text-white-bg  dark:focus:ring-green-light `}
    >
      <option
        value="en"
        className={`rounded-lg p-2 bg-transparent ${classNameChild}`}
      >
        English
      </option>

      <option value="fa" className="rounded-lg p-2">
        فارسی
      </option>
    </select>
  );
};

export default LanguageSwitcher;
