import { PokemonProps } from '@hooks/getPokemonDetails';
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
  data: PokemonProps;
}

export function ContentDetails({ data }: Props) {
  const theme = usePokemonColor(data.color!);

  function formattedText(text: string) {
    // Line break remover
    return text.replace(/(\r\n|\n|\r)/gm, "");
  }

  return (
    <Container>
      <Title>
        {formattedText(data.description!)}
      </Title>

      <DetailsGroup>
        <DetailInfo>
          <DetailInfoText>Weight:</DetailInfoText>

          <DetailInfoAreaValue style={{ backgroundColor: theme?.colors?.primary }}>
            <DetailInfoValue color={isWhiteColor(data.color!)}>
              {data.weight}kg
            </DetailInfoValue>
          </DetailInfoAreaValue>
        </DetailInfo>

        <DetailInfo>
          <DetailInfoText>Height:</DetailInfoText>

          <DetailInfoAreaValue style={{ backgroundColor: theme?.colors?.primary }}>
            <DetailInfoValue color={isWhiteColor(data.color!)}>
              {data.height}m
            </DetailInfoValue>
          </DetailInfoAreaValue>
        </DetailInfo>

        <DetailInfo>
          <DetailInfoText>Major Move:</DetailInfoText>

          <DetailInfoAreaValue style={{ backgroundColor: theme?.colors?.primary }}>
            <DetailInfoValue color={isWhiteColor(data.color!)}>
              Solar Bean
            </DetailInfoValue>
          </DetailInfoAreaValue>
        </DetailInfo>
      </DetailsGroup>

      <Stats data={data!} />

    </Container>
  );
}