import { NextRequest } from 'next/server';

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
export function middleware(req: NextRequest) {
  const res = intlMiddleware(req);
  const cookieTheme = req.cookies.get('theme')?.value;
  if (!cookieTheme) req.cookies.set({ name: 'theme', value: 'light' });
  return res;
}
