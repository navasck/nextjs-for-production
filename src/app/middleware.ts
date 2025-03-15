import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there are any supported locales in the pathname
  const pathnameIsMissingLocale = ['/en', '/es', '/fr', '/ar', '/ml'].every(
    (locale) => !pathname.startsWith(locale + '/') && pathname !== locale
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. /en/about -> /about
    // e.g. /about -> /en/about
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};