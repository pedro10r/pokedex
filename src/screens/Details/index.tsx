import { useNavigation, useRoute } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Stats } from './components/Stats';
import { HeaderDetails } from './components/HeaderDetails';
import { LoadAnimation } from '@components/LoadAnimation';

import { usePokemonDetail } from '@hooks/pokemonDetails';
import { usePokemonColor, isWhiteColor } from '@hooks/pokemonColors';

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

type RouteParams = {
  id: string;
}

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const { data, loading } = usePokemonDetail(parseInt(id));

  const colorName = data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemoncolor.name!;
  const theme = usePokemonColor(colorName);
  
  function handleGoBack() {
    navigation.goBack();
  }

  function formattedText(text: string) {
    // Line break remover
    return text.replace(/(\r\n|\n|\r)/gm, "");
  }

  return (
    <>
      <Container>
        <Header onPress={handleGoBack} />
          
        {loading ? <LoadAnimation /> : 
          <Content>

            <HeaderDetails
              data={data!}
            />
    
            <ContentDetails>
              <Title>
                {formattedText(data?.pokemon_v2_pokemonspecies_by_pk?.pokemon_v2_pokemonspeciesflavortexts[0]?.flavor_text!)}
              </Title>
    
              <DetailsGroup>
                <DetailInfo>
                  <DetailInfoText>Weight:</DetailInfoText>
    
                  <DetailInfoAreaValue style={{ backgroundColor: theme?.colors?.primary }}>
                    <DetailInfoValue color={isWhiteColor(colorName)}>
                      {data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].weight}kg
                    </DetailInfoValue>
                  </DetailInfoAreaValue>
                </DetailInfo>
    
                <DetailInfo>
                  <DetailInfoText>Height:</DetailInfoText>
    
                  <DetailInfoAreaValue style={{ backgroundColor: theme?.colors?.primary }}>
                    <DetailInfoValue color={isWhiteColor(colorName)}>
                      {data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].height}m
                    </DetailInfoValue>
                  </DetailInfoAreaValue>
                </DetailInfo>
    
                <DetailInfo>
                  <DetailInfoText>Major Move:</DetailInfoText>
    
                  <DetailInfoAreaValue style={{ backgroundColor: theme?.colors?.primary }}>
                    <DetailInfoValue color={isWhiteColor(colorName)}>
                      Solar Bean
                    </DetailInfoValue>
                  </DetailInfoAreaValue>
                </DetailInfo>
              </DetailsGroup>
    
              <Stats data={data!} />

            </ContentDetails>
          </Content>
        }
      </Container>
    </>
  );
}