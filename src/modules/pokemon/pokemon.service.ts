import { PokemonResponse, PokemonDetail } from "./pokemon.types";

class PokemonService {
  public async get(pokemonId: string): Promise<PokemonDetail> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);

    return await res.json();
  }

  public async all(): Promise<PokemonResponse> {
    const res = await  fetch('https://pokeapi.co/api/v2/pokemon?limit=30');

    return await res.json();
  }
}

const pokemonService = new PokemonService();

export { pokemonService as PokemonService };