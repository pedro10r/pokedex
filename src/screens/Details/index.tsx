import { useNavigation, useRoute } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Stats } from './components/Stats';
import { HeaderDetails } from './components/HeaderDetails';

import {
  Container,
  Content,
  ContentDetails,
  Title,
  DetailsGroup,
  DetailInfo,
  DetailInfoText,
  DetailInfoAreaValue,
  DetailInfoValue,
} from './styles';
import { usePokemonDetail } from '@hooks/pokemonDetails';

type RouteParams = {
  id: string;
}

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const { data, loading } = usePokemonDetail(parseInt(id));

  console.log('AQUIII', !loading && data.pokemon_v2_pokemonspecies_by_pk);

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header onPress={handleGoBack} />
      
      <Content>
        <HeaderDetails />

        <ContentDetails>
          <Title>
            A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.
          </Title>

          <DetailsGroup>
            <DetailInfo>
              <DetailInfoText>Weight:</DetailInfoText>

              <DetailInfoAreaValue>
                <DetailInfoValue>6.9kg</DetailInfoValue>
              </DetailInfoAreaValue>
            </DetailInfo>

            <DetailInfo>
              <DetailInfoText>Height:</DetailInfoText>

              <DetailInfoAreaValue>
                <DetailInfoValue>0.7m</DetailInfoValue>
              </DetailInfoAreaValue>
            </DetailInfo>

            <DetailInfo>
              <DetailInfoText>Major Move:</DetailInfoText>

              <DetailInfoAreaValue>
                <DetailInfoValue>Solar Bean</DetailInfoValue>
              </DetailInfoAreaValue>
            </DetailInfo>
          </DetailsGroup>

          <Stats />
        </ContentDetails>
      </Content>

    </Container>
  );
}