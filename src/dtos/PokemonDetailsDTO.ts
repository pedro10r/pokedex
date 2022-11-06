export type PokemonDetailsDTO = {
  pokemon_v2_pokemonspecies_by_pk: {
    pokemon_v2_pokemons: {
      id: string;
      name: string;
      height: number;
      weight: number;
      pokemon_v2_pokemontypes: {
        type_id: number;
        pokemon_v2_type: {
          name: string;
        }
      }[];
      pokemon_v2_pokemonstats: {
        base_stat: number;
        pokemon_v2_stat: {
          name: string;
        }
      }[];
    }[];
    pokemon_v2_pokemonspeciesflavortexts: {
      flavor_text: string;
    }[];
    pokemon_v2_pokemoncolor: {
      name: string;
    }
  }
}