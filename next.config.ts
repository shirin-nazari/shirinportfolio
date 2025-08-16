// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
//   i18n: {
//     locales: ['en', 'fa'],
//     defaultLocale: 'en',
//   },
// };

// export default nextConfig;

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
