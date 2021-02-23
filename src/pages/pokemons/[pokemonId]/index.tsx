import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Layout } from '@core/layout';
import { PokemonDetail } from '@pokemon/pokemon.types';
import { PokemonService } from '@pokemon/pokemon.service';

import styles from '@styles/app.module.css';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<PokemonDetail>(null);
  const { query: { pokemonId } } = useRouter();

  useEffect(() => {
    async function loadPokemon(): Promise<void> {
      if (pokemonId) {
        PokemonService.get(pokemonId as string)
          .then(data => setPokemon(data))
      }
    }

    loadPokemon();
  }, [pokemonId]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemons detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>Pokemon detail fetch on the browser</h1>

          {pokemon &&
            <article>
              <h2>{pokemon.name}</h2>
              <img style={{ height: '6rem' }} src={pokemon.sprites.front_default} />
            </article>
          }
        </main>
      </Layout>
    </div>
  );
}
