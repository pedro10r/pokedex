import { useNavigation, useRoute } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Stats } from './components/Stats';
import { HeaderDetails } from './components/HeaderDetails';
import { Load } from '@components/Load';

import { usePokemonDetail } from '@hooks/pokemonDetails';

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
import { usePokemonColor } from '@hooks/pokemonColors';

type RouteParams = {
  id: string;
}

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const { data, loading } = usePokemonDetail(parseInt(id));

  const { colors } = usePokemonColor(data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemoncolor.name!);
  
  function handleGoBack() {
    navigation.goBack();
  }

  function formattedText(text: string) {
    return text.replace(/(\r\n|\n|\r)/gm, "");
  }

  return (
    <>
      <Container>
        <Header onPress={handleGoBack} />
          
        {loading ? <Load /> : 
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
    
                  <DetailInfoAreaValue style={{ backgroundColor: colors?.primary }}>
                    <DetailInfoValue>{data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].weight}kg</DetailInfoValue>
                  </DetailInfoAreaValue>
                </DetailInfo>
    
                <DetailInfo>
                  <DetailInfoText>Height:</DetailInfoText>
    
                  <DetailInfoAreaValue style={{ backgroundColor: colors?.primary }}>
                    <DetailInfoValue>{data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].height}m</DetailInfoValue>
                  </DetailInfoAreaValue>
                </DetailInfo>
    
                <DetailInfo>
                  <DetailInfoText>Major Move:</DetailInfoText>
    
                  <DetailInfoAreaValue style={{ backgroundColor: colors?.primary }}>
                    <DetailInfoValue>Solar Bean</DetailInfoValue>
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