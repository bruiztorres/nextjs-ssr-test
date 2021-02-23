import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import appStyles from '@styles/app.module.css';
import headerStyles from './header.module.scss';

export const Header: React.FC = () => {
  const { locale: currentLocale, locales } = useRouter();

  return (
    <header className={headerStyles.header}>
      <div>
        <Link href="/welcome">
          <a><img src="/vercel.svg" alt="Vercel Logo" className={appStyles.logo} /></a>
        </Link>

        <nav className={headerStyles.header__nav}> 
          <Link href="/welcome/weather-ssr">
            <a>Weather SSR</a>
          </Link>

          <Link href="/welcome/weather">
            <a>Weather</a>
          </Link>

          <Link href="/pokemons">
            <a>Pokemons</a>
          </Link>
        </nav>
      </div>

      <ul>
        {locales.map(locale => (
          <li key={locale}>
            <Link href={`/${locale}`} locale={false} >
              <a className={classNames(headerStyles.header__item, { [headerStyles.active]: locale === currentLocale })}>
                {locale}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
