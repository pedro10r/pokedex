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
  query PokemonDetails($id: Int!) {
    pokemon_v2_pokemonspecies_by_pk(id: $id) {
      pokemon_v2_pokemons {
        id
        name
        height
        weight
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
          type_id
        }
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
        }
      }
      pokemon_v2_pokemonspeciesflavortexts(limit: 1) {
        flavor_text
        id
      }
      pokemon_v2_pokemoncolor {
        name
      }
    }
  }
`;