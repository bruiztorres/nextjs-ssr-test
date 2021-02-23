export interface PokemonResponse {
  results: Pokemon[]
}

export interface PokemonDetail {
  name: string;
  sprites: {
    front_default: string;
  }
}

export interface Pokemon {
  name: string;
  url: string;
}