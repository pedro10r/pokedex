import { TouchableOpacityProps } from 'react-native';
import { PokemonInfoDTO } from '@dtos/PokemonDTO';

import { SvgUri } from 'react-native-svg';

import { usePokemonSprites } from '@hooks/pokemonSprites';
import { usePokemonColor } from '@hooks/pokemonColors';

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
  const { imagePng, imageSvg } = usePokemonSprites(String(data.id));
  const { colors } = usePokemonColor(data.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name);

  return (
    <Container
      style={{ backgroundColor: colors?.primary }}
      activeOpacity={0.7}
      {...rest}
    >
      <NumberPokedexArea>
        <NumberPokedex>#00{data.id}</NumberPokedex>
      </NumberPokedexArea>

      <Bubble style={{ backgroundColor: colors?.secondary }}>
        <PokemonImage
          resizeMode='contain'
          source={{ uri: imagePng }}
        />
        
        {/* In case of use SVG */}
        {/* <SvgUri
          uri={imageSvg}
          width={120}
          height={120}
        /> */}
      </Bubble>
      
      <PokemonName>{data.name}</PokemonName>

      <Habilities>
        {data.pokemon_v2_pokemontypes.map((item, index) => (
          <Hability
            key={index}
            style={{ backgroundColor: colors?.support }}
          >
            <HabilityText>{item.pokemon_v2_type.name}</HabilityText>
          </Hability>
        ))}
      </Habilities>
    </Container>
  );
}