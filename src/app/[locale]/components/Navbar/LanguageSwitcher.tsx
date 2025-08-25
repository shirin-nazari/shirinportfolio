'use client';
import React, { useState } from 'react';
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
  const [selected, setSelected] = useState('');

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const locale = e.target.value;
    startTransition(() => {
      router.replace({ pathname }, { locale });
    });
    setSelected(locale);
    localStorage.setItem('i18nextLng', selected);
  }
  return (
    <select
      name="locale"
      onChange={onChange}
      defaultValue={pathname.startsWith('/fa') ? 'fa' : 'en'}
      // value={selected}
      id="language"
      disabled={isPending}
      // className={`border-none rounded-lg p-3 outline-none ${className}  text-sm text-dark-mode  bg-transparent focus:ring-green-light dark:bg-dark-mode  dark:placeholder-gray-400 dark:text-white-bg dark:focus:ring-green-light `}
      className={`border-none rounded-lg p-3 outline-none ${className}  text-sm text-dark-mode  bg-transparent focus:ring-transparent dark:bg-transparent  dark:placeholder-gray-400 dark:text-white-bg  dark:focus:ring-green-light `}
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
