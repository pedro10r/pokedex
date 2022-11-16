import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Progress from 'react-native-progress';
import { useTheme } from 'styled-components';

import { PokemonDetailsDTO } from '@dtos/PokemonDetailsDTO';
import { capitalized } from '../../../../utils/capitalized';

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
  const theme = useTheme();

  function colorPercentageProgress(value: number) {
    if (value > .0 && value < .5) {
      return theme?.colors?.danger;
    } else if (value >= .5 && value <= .65) {
      return theme?.colors?.green_300;
    } else {
      return theme?.colors?.success;
    }
  }

  function calculateTotalStats() {
    const stats = data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats;

    let array = new Array();
    stats.forEach((item) => {
      array.push(item.base_stat);
    })

    const result = array.reduce(function (sum, i) {
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
              color={theme?.colors?.blue_300}
            />
            <PercentText>87%</PercentText>
          </Gender>

          <Gender>
            <Ionicons
              name='female-sharp'
              size={RFValue(15)}
              color={theme?.colors?.pink_300}
            />
            <PercentText>13%</PercentText>
          </Gender>
        </GenderPercent>
      </StatsHeader>

      {data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats.map((item) => (
        <ContentStats key={item.pokemon_v2_stat.name}>
          <TitleStats>{capitalized(item.pokemon_v2_stat.name)}</TitleStats>

          <ValueStats>
            <Value>{item.base_stat.toString()}</Value>
            <Progress.Bar
              progress={item.base_stat / 100}
              width={105}
              borderWidth={0}
              unfilledColor={theme?.colors?.gray_200}
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
            unfilledColor={theme?.colors?.gray_200}
            color={colorPercentageProgress(calculateTotalStats() / 600 * 100 / 100)}
          />
        </ValueStats>
      </ContentStats>
    </Container>
  );
}