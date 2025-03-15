import { getDictionary } from '@/lib/i18n';

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const dictionary = await getDictionary(locale);

  return (
    <div>
      <h1>{dictionary.welcome}</h1>
      <p>{dictionary.about}</p>
      <p>{dictionary.contact}</p>
    </div>
  );
}