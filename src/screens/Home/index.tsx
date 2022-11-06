import { FlatList } from 'react-native';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Card } from '@components/Card';
import { Load } from '@components/Load';

import { usePokemon } from '@contexts/pokemon';

import {
  Container,
  Content,
  Title,
} from './styles';

export function Home() {
  const { pokemon, loading } = usePokemon();
  
  const navigation = useNavigation();

  function handleOpenDetails(id: number) {
    navigation.navigate('details', { id });
  }

  const { 
    control,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm<FormData>();

  const formControll = control as unknown as Control<FieldValues, any>;

  return (
    <Container>
      <Header />

      <Content>
        <Title>More than 250 Pokemons for you to choose your favorite</Title>

        <Input
          name="search"
          control={formControll}
          placeholder="Search Pokémon"
        />

        {loading ? <Load /> :
          <FlatList
            data={pokemon.pokemon_v2_pokemon}
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
  );
}