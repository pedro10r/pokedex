export type PokemonDetailsDTO = {
  pokemon_v2_pokemon: [
    {
      id: number;
      height: number;
      weight: number;
      name: string;
      pokemon_v2_pokemonstats: {
        base_stat: number;
        pokemon_v2_stat: {
          name: string;
        };
      }[],
      pokemon_v2_pokemontypes: {
        pokemon_v2_type: {
          name: string;
        },
      }[];
      pokemon_v2_pokemonspeciesflavortexts: {
        flavor_text: string;
      }[];
    }
  ]
}