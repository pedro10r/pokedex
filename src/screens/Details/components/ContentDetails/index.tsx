import { PokemonDetailsDTO } from '@dtos/PokemonDetailsDTO';
import { isWhiteColor, usePokemonColor } from '@hooks/pokemonColors';

import { Stats } from '../Stats';

import {
  Container,
  Title,
  DetailsGroup,
  DetailInfo,
  DetailInfoText,
  DetailInfoAreaValue,
  DetailInfoValue,
} from './styles';

type Props = {
  data: PokemonDetailsDTO;
}

export function ContentDetails({ data }: Props) {
  const colorName = data?.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemoncolor.name!;
  const theme = usePokemonColor(colorName);

  function formattedText(text: string) {
    // Line break remover
    return text.replace(/(\r\n|\n|\r)/gm, "");
  }

  return (
    <Container>
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

    </Container>
  );
}