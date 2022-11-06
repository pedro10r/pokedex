export type PokemonDTO = {
  pokemon_v2_pokemon: [
    {
      id: number;
      name: string;
      pokemon_v2_pokemontypes: [
        type_id: number,
        pokemon_v2_type: {
          name: string;
        },
      ];
    }
  ]
}