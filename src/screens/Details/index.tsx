import { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Header } from '@components/Header';
import { HeaderDetails } from './components/HeaderDetails';
import { LoadAnimation } from '@components/LoadAnimation';
import { ContentDetails } from './components/ContentDetails';

import { usePokemonDetail } from '@hooks/getPokemonDetails';

import {
  Container,
  Content,
} from './styles';

type RouteParams = {
  id: string;
}

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const { pokemon, loading } = usePokemonDetail(parseInt(id));

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <>
      <Container>
        <Header onPress={handleGoBack} />

        {loading ? <LoadAnimation /> :
          <Content>
            <HeaderDetails data={pokemon} />

            <ContentDetails data={pokemon} />
          </Content>
        }
      </Container>
    </>
  );
}