import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';


const locales = ['en', 'es', 'fr', 'ar', 'ml']; // Add your supported locales
const defaultLocale = 'en';

export function getLocale(request: Request): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  return match(languages, locales, defaultLocale);
}

export async function getDictionary(locale: string) {
  try {
    return (await import(`../locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load locale ${locale}`, error);
    return (await import(`../locales/${defaultLocale}.json`)).default;
  }
}