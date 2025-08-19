'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from '@/src/i18n/navigation';
import { useTransition } from 'react';

const LanguageSwitcher = () => {
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
      className="bg-white-500 border-none rounded-lg p-2 outline-none"
    >
      <option value="en" className="rounded-lg p-2">
        English
      </option>

      <option value="fa" className="rounded-lg p-2">
        فارسی
      </option>
    </select>
  );
};

export default LanguageSwitcher;
