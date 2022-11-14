import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { LoadAnimation } from '@components/LoadAnimation';
import { PokemonList } from '@components/PokemonList';

import { usePokemon } from '@contexts/pokemon';

import {
  Container,
  Content,
  Title,
} from './styles';

export function Home() {
  const [search, setSearch] = useState('');
  const { data, loading } = usePokemon();
  
  const filteredPokemons = search.length > 0
    ? data?.pokemon_v2_pokemon.filter(
      pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
  : [];

  const pokemons = search.length > 0 ? filteredPokemons : data?.pokemon_v2_pokemon;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header
          hasButton={false}
        />

        <Content>
          <Title>More than 250 Pokemons for you to choose your favorite</Title>

          <Input
            placeholder="Search Pokémon"
            onChangeText={setSearch}
            value={search}
            autoCorrect={false}
          />

          {loading ? <LoadAnimation /> :
            <PokemonList
              data={pokemons!}
            />
          }
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}