import { FlatList } from 'react-native';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { PokeCard } from '@components/PokeCard';

import {
  Container,
  Content,
  Title,
} from './styles';

export function Home() {
  const navigation = useNavigation();

  function handleOpenPokemonDetails() {
    navigation.navigate('pokemon_details');
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

        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={item => String(item)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{
            flexDirection: 'column'
          }}
          renderItem={() => (
            <PokeCard
              onPress={handleOpenPokemonDetails}
            />
          )}
        />
      </Content>
      
    </Container>
  );
}