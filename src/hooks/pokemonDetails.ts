import { useQuery } from '@apollo/client';
import { PokemonDetailsDTO } from '@dtos/PokemonDetailsDTO';
import { LOAD_POKEMON_DETAIL } from '../graphQL/queries';

export function usePokemonDetail(id: number) {
  const { data, loading } = useQuery<PokemonDetailsDTO>(LOAD_POKEMON_DETAIL, {
    variables: { id }
  })

  return { data, loading };
}