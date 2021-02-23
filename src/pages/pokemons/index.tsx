import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Layout } from '@core/layout';
import { Pokemon } from '@pokemon/pokemon.types';
import { PokemonService } from '@pokemon/pokemon.service';

import styles from '@styles/app.module.css';

export default function Pokemons() {
  const { t } = useTranslation();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      PokemonService.all()
        .then(({ results }) => setPokemons(results))
    }

    loadPokemons();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('pokemon-title-page')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            {t('pokemon-heading-page')}
          </h1>

          <ul className={styles.pokemons}>
            {pokemons.map(pokemon => (
              <li key={pokemon.name}>
                <Link prefetch={false} href={`/pokemons/${pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '')}`}>
                  <a className={styles.pokemon}>
                    {pokemon.name.toUpperCase()}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </Layout>
    </div>
  );
}
