import { gql } from '@apollo/client';

export const LOAD_POKEMONS = gql`
  query Pokemons {
    pokemon_v2_pokemon(limit: 10) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const LOAD_POKEMON_DETAIL = gql`
  query PokemonDetail {
    pokemon_v2_pokemon(limit: 10) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
`;