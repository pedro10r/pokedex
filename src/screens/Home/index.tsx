import { useState } from 'react';
import { FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Card } from '@components/Card';
import { LoadAnimation } from '@components/LoadAnimation';

import { usePokemon } from '@contexts/pokemon';

import {
  Container,
  Content,
  Title,
} from './styles';

export function Home() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  
  const { pokemons, loading } = usePokemon();
  
  const filteredPokemons = search.length > 0
  ? pokemons.pokemon_v2_pokemon.filter(
      pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
  : [];

  function handleOpenDetails(id: number) {
    navigation.navigate('details', { id });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header onPress={() => {}} />

        <Content>
          <Title>More than 250 Pokemons for you to choose your favorite</Title>

          <Input
            placeholder="Search Pokémon"
            onChangeText={setSearch} // implemented a dynamic list filter, just type to return
            value={search}
            onPress={() => setSearch}
            autoCorrect={false}
          />

          {loading ? <LoadAnimation /> :
            <FlatList
              data={search.length > 0 ? filteredPokemons : pokemons.pokemon_v2_pokemon}
              keyExtractor={item => String(item.id)}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              contentContainerStyle={{
                flexDirection: 'column'
              }}
              renderItem={({ item }) => (
                <Card
                  data={item}
                  onPress={() => handleOpenDetails(item.id)}
                />
              )}
            />
          }
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}