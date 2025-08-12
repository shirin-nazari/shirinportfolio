import { NextRequest, NextResponse } from 'next/server';
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname, locale, search } = req.nextUrl;
  const res = NextResponse.next();
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  )
    return res;
  if (locale === 'default') {
    const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value || 'en';
    const newUrl = new URL(`/${cookieLocale}${pathname}${search}`, req.url);
    return NextResponse.redirect(newUrl);
  }

  const cookieTheme = req.cookies.get('theme')?.value;
  if (!cookieTheme) req.cookies.set({ name: 'theme', value: 'light' });
  return res;
}
