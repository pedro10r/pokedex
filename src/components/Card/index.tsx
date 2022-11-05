import { TouchableOpacityProps } from 'react-native';

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

type Props = TouchableOpacityProps & {}

export function Card({ ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      {...rest}
    >
      <NumberPokedexArea>
        <NumberPokedex>#001</NumberPokedex>
      </NumberPokedexArea>

      <Bubble>
        <PokemonImage source={{ uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' }} />
      </Bubble>
      
      <PokemonName>Bulbasaur</PokemonName>

      <Habilities>
        <Hability>
          <HabilityText>Grass</HabilityText>
        </Hability>

        <Hability>
          <HabilityText>Poison</HabilityText>
        </Hability>
      </Habilities>
    </Container>
  );
}