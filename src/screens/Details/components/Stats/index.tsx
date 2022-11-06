import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Progress from 'react-native-progress';

import { PokemonDetailsDTO } from '@dtos/PokemonDetailsDTO';

import {
  Container,
  StatsHeader,
  GenderTitle,
  GenderPercent,
  Gender,
  PercentText,
  ContentStats,
  TitleStats,
  ValueStats,
  Value,
} from './styles';

type Props = {
  data: PokemonDetailsDTO;
}

export function Stats({ data }: Props) {

  function colorPercentageProgress(value: number) {
    if (value > .0 && value < .5) {
      return '#E63950'
    } else if (value >= .5 && value <= .65) {
      return '#45C0A3'
    } else {
      return '#53E37E'
    }
  }

  function colorPercentageProgressTotal(value: number) {
    const total = value / 600 * 100 / 100;

    if (total > .0 && total < .5) {
      return '#E63950'
    } else if (total >= .5 && total <= .65) {
      return '#45C0A3'
    } else {
      return '#53E37E'
    }
  }

  function calculateTotalStats() {
    const stats = data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats;
    
    let array = new Array();
    
    stats.forEach((item) => {
      array.push(item.base_stat);
    })

    const result =  array.reduce(function(sum, i) {
      return sum + i;
    })

    return result;
  }
  
  return (
    <Container>
      <StatsHeader>
        <GenderTitle>Gender</GenderTitle>

        <GenderPercent>
          <Gender>
            <Ionicons
              name='male-sharp'
              size={RFValue(15)}
              color={'#2D5BC6'}
            />
            <PercentText>87%</PercentText>
          </Gender>

          <Gender>
            <Ionicons
              name='female-sharp'
              size={RFValue(15)}
              color={'#FF386F'}
            />
            <PercentText>13%</PercentText>
          </Gender>
        </GenderPercent>
      </StatsHeader>

      {data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats.map((item) => (
        <ContentStats key={item.pokemon_v2_stat.name}>
          <TitleStats>{item.pokemon_v2_stat.name}</TitleStats>

          <ValueStats>
            <Value>{item.base_stat.toString()}</Value>
            <Progress.Bar
              progress={item.base_stat / 100}
              width={105}
              borderWidth={0}
              unfilledColor='#B7B7B8'
              color={colorPercentageProgress(item.base_stat / 100)}
            />
          </ValueStats>
        </ContentStats>
      ))}

      <ContentStats>
        <TitleStats>Total</TitleStats>

        <ValueStats>
          <Value>{calculateTotalStats()}</Value>
          <Progress.Bar
            progress={calculateTotalStats() / 600 * 100 / 100}
            width={105}
            borderWidth={0}
            unfilledColor='#B7B7B8'
            color={colorPercentageProgressTotal(calculateTotalStats())}
          />
        </ValueStats>
      </ContentStats>
    </Container>
  );
}