import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Layout } from '@core/layout';
import { WeatherTile } from '@weather/weather-tile';
import { MetaWeather } from '@weather/weather.types';

import styles from '@styles/app.module.css';

export default function Weather() {
  const { t } = useTranslation();
  const [data, setData] = useState<MetaWeather>();

  useEffect(() => {
    fetch(`/api/weather`)
      .then(result => result.json())
      .then(result => setData(result))
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('weather-title-page')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            {t('weather-heading-page')}
          </h1>

          <h2>Forecast</h2>

          <div className={styles.weather}>
            {data && data.consolidated_weather.map((weather) => (
              <WeatherTile title={data.title} weather={weather} key={weather.id} />
            ))}
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
