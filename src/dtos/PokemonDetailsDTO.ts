export type PokemonDTO = {
  pokemon_v2_pokemon: [
    {
      height: number;
      id: number;
      name: string;
      pokemon_v2_pokemonstats: [
        {
          base_stat: number;
          pokemon_v2_stat: {
            name: string;
          };
        },
      ];
      pokemon_v2_pokemontypes: [
        pokemon_v2_type: {
          name: string;
        },
      ];
      weight: number;
    }
  ]
}