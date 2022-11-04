import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

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

export function PokemonDetails() {
  const { colors } = useTheme();
  const navigation = useNavigation();

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