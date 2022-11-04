import { Control, FieldValues, useForm } from 'react-hook-form';

import { Header } from '@components/Header';
import { Input } from '@components/Input';

import {
  Container,
  Content,
  Title
} from './styles';

export function Home() {


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
      </Content>
      
    </Container>
  );
}