import { useQuery } from '@apollo/client';

import { PokemonDetailsDTO } from '@dtos/PokemonDetailsDTO';
import { LOAD_POKEMON_DETAIL } from '../graphQL/pokemon/queries';

export type PokemonProps = {
  id: string | undefined;
  name: string | undefined;
  height: number | undefined;
  weight: number | undefined;
  description: string | undefined;
  color: string | undefined;
  types: {
    type_id: number | undefined;
    pokemon_v2_type: {
      name: string | undefined;
    }
  }[] | undefined;
  stats: {
    base_stat: number;
    pokemon_v2_stat: {
      name: string;
    }
  }[] | undefined;
}

export function usePokemonDetail(id: number) {
  const { data, loading } = useQuery<PokemonDetailsDTO>(LOAD_POKEMON_DETAIL, {
    variables: { id }
  })

  const pokemon: PokemonProps = {
    id: data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].id,
    name: data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].name,
    height: data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].weight,
    weight: data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].height,
    description: data?.pokemon_v2_pokemonspecies_by_pk?.pokemon_v2_pokemonspeciesflavortexts[0]?.flavor_text,
    color: data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemoncolor.name,
    types: data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes,
    stats: data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats
  }

  return { pokemon, loading };
}