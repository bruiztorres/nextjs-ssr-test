import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Layout } from '@core/layout';
import { WeatherTile } from '@weather/weather-tile';
import { MetaWeather } from '@weather/weather.types';
import { WeatherService } from '@weather/weather.service';

import styles from '@styles/app.module.css';

interface WeatherProps {
  data: MetaWeather;
}

export default function WeatherSSR({ data }: WeatherProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('weather-ssr-title-page')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            {t('weather-ssr-heading-page')}
          </h1>

          <h2>Forecast</h2>

          <div className={styles.weather}>
            {data.consolidated_weather.map((weather) => (
              <WeatherTile title={data.title} weather={weather} key={weather.id} />
            ))}
          </div>
        </main>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  const woeid = 753692; // Barcelona
  const [weather, nextI18Next] = await Promise.all([
    WeatherService.get(woeid),
    // NOTE: It should load on getStaticProps
    serverSideTranslations(locale, ['common'])
  ]);

  return {
    props: {
      data: weather,
      ...nextI18Next
    }
  }
}