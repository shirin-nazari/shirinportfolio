import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('homePage');
  return (
    <div className=" dark:text-white-bg h-full rounded p-50">
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
