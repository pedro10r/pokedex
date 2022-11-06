import { useState } from 'react';
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

type RouteParams = {
  id: string;
}

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const { data, loading } = usePokemonDetail(parseInt(id));
  
  function handleGoBack() {
    navigation.goBack();
  }

  function formattedText(text: string) {
    return text.replace(/(\r\n|\n|\r)/gm, "");
  }

  return (
    <>
      {loading ? <Load /> : 
        <Container>
          <Header onPress={handleGoBack} />
          
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
    
                  <DetailInfoAreaValue>
                    <DetailInfoValue>{data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].weight}kg</DetailInfoValue>
                  </DetailInfoAreaValue>
                </DetailInfo>
    
                <DetailInfo>
                  <DetailInfoText>Height:</DetailInfoText>
    
                  <DetailInfoAreaValue>
                    <DetailInfoValue>{data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].height}kg</DetailInfoValue>
                  </DetailInfoAreaValue>
                </DetailInfo>
    
                <DetailInfo>
                  <DetailInfoText>Major Move:</DetailInfoText>
    
                  <DetailInfoAreaValue>
                    <DetailInfoValue>Solar Bean</DetailInfoValue>
                  </DetailInfoAreaValue>
                </DetailInfo>
              </DetailsGroup>
    
              <Stats data={data!} />
            </ContentDetails>
          </Content>
        </Container>
      }
    </>
  );
}