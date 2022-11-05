import { ActivityIndicator, FlatList } from 'react-native';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Card } from '@components/Card';

import {
  Container,
  Content,
  Title,
} from './styles';
import { usePokemon } from '../../context/pokemon/hook';

export function Home() {
  const { pokemon, loading } = usePokemon();
  
  const navigation = useNavigation();

  function handleOpenDetails() {
    navigation.navigate('details');
  }

  const { 
    control,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm<FormData>();

  const formControll = control as unknown as Control<FieldValues, any>;

  console.log('aqui', pokemon);

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

        {loading ? <ActivityIndicator /> :
          <FlatList
            data={pokemon.pokemon_v2_pokemon}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
              flexDirection: 'column'
            }}
            renderItem={() => (
              <Card
                onPress={handleOpenDetails}
              />
            )}
          />
        }
      </Content>
      
    </Container>
  );
}