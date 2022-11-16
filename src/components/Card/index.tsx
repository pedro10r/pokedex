import { TouchableOpacityProps } from 'react-native';
import { PokemonInfoDTO } from '@dtos/PokemonDTO';

import { usePokemonImage } from '@hooks/pokemonImage';
import { usePokemonColor, isWhiteColor } from '@hooks/pokemonColors';
import { capitalized } from '../../utils/capitalized';

import {
  Container,
  NumberPokedexArea,
  NumberPokedex,
  Bubble,
  PokemonImage,
  PokemonName,
  Habilities,
  Hability,
  HabilityText,
} from './styles';

type Props = TouchableOpacityProps & {
  data: PokemonInfoDTO;
}

export function Card({ data, ...rest }: Props) {
  const { imagePng } = usePokemonImage(String(data.id));

  const colorName = data.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name;
  const theme = usePokemonColor(colorName);

  return (
    <Container
      style={{ backgroundColor: theme?.colors?.primary }}
      activeOpacity={0.7}
      {...rest}
    >
      <NumberPokedexArea>
        <NumberPokedex>#00{data.id}</NumberPokedex>
      </NumberPokedexArea>

      <Bubble
        style={{ backgroundColor: theme?.colors?.secondary }}
      >
        <PokemonImage
          resizeMode='contain'
          source={{ uri: imagePng }}
        />
      </Bubble>

      <PokemonName
        color={isWhiteColor(colorName)}
        numberOfLines={1}
        largeName={data.name.length > 11}
      >
        {capitalized(data.name)}
      </PokemonName>

      <Habilities
        isTwoTypes={data.pokemon_v2_pokemontypes.length > 1}
      >
        {data.pokemon_v2_pokemontypes.map((item, index) => (
          <Hability
            key={index}
            style={{ backgroundColor: theme?.colors?.support }}
          >
            <HabilityText
              color={isWhiteColor(colorName)}
            >
              {capitalized(item.pokemon_v2_type.name)}
            </HabilityText>
          </Hability>
        ))}
      </Habilities>
    </Container>
  );
}