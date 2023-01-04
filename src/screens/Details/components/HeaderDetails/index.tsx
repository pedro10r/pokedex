import { PokemonProps } from '@hooks/getPokemonDetails';

import { usePokemonImage } from '@hooks/pokemonImage';
import { usePokemonColor, isWhiteColor } from '@hooks/pokemonColors';
import { capitalized } from '@utils/capitalized';

import {
  Container,
  Bubble,
  PokemonImage,
  HeaderInfo,
  NumberPokedexArea,
  NumberPokedex,
  PokemonName,
  Habilities,
  Hability,
  HabilityText,
} from './styles';

type Props = {
  data: PokemonProps;
}

export function HeaderDetails({ data }: Props) {
  const theme = usePokemonColor(data.color!);
  const { imagePng } = usePokemonImage(data.id!);

  return (
    <>
      <Bubble style={{ backgroundColor: theme?.colors?.secondary }}>
        <PokemonImage
          resizeMode="contain"
          source={{ uri: imagePng }}
        />
      </Bubble>

      <Container style={{ backgroundColor: theme?.colors?.primary }}>
        <HeaderInfo>
          <NumberPokedexArea>
            <NumberPokedex>
              #00{data.id}
            </NumberPokedex>
          </NumberPokedexArea>

          <PokemonName
            color={isWhiteColor(data.color!)}
            largeName={data.name!.length > 9}
          >
            {capitalized(data.name!)}
          </PokemonName>

          <Habilities>
            {data.types!.map((item) => (
              <Hability
                key={item.type_id}
                style={{ backgroundColor: theme?.colors?.support }}
              >
                <HabilityText color={isWhiteColor(data.color!)}>
                  {capitalized(item.pokemon_v2_type.name!)}
                </HabilityText>
              </Hability>
            ))}
          </Habilities>
        </HeaderInfo>
      </Container>
    </>
  );
}