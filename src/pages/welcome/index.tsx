import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@core/layout';
import styles from '@styles/app.module.css';

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('welcome-title-page')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            {t('welcome-heading-page')}
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <Link href="/welcome/weather-ssr">
              <a className={styles.card}>
                <h3>Weather SSR</h3>
                <p>Some content retrieved in the server from external API</p>
              </a>
            </Link>

            <Link href="/welcome/weather">
              <a className={styles.card}>
                <h3>Weather</h3>
                <p>Some content retrieved in the client from external API</p>
              </a>
            </Link>

            <Link href="/pokemons">
              <a className={styles.card}>
                <h3>Pokemons</h3>
                <p>A bunch of pokemons retrieved in the client from external API!</p>
              </a>
            </Link>

          </div>
        </main>
      </Layout>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common'])
  }
})