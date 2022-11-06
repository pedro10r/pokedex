import { TouchableOpacityProps } from 'react-native';
import { PokemonInfoDTO } from '@dtos/PokemonDTO';

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
import { usePokemonSprites } from '@hooks/pokemonSprites';

type Props = TouchableOpacityProps & {
  data: PokemonInfoDTO;
}

export function Card({ data, ...rest }: Props) {
  const { imagePng } = usePokemonSprites(String(data.id));

  return (
    <Container
      activeOpacity={0.7}
      {...rest}
    >
      <NumberPokedexArea>
        <NumberPokedex>#00{data.id}</NumberPokedex>
      </NumberPokedexArea>

      <Bubble>
        <PokemonImage source={{ uri: imagePng }} />
      </Bubble>
      
      <PokemonName>{data.name}</PokemonName>

      <Habilities>
        {data.pokemon_v2_pokemontypes.map((item) => (
          <Hability key={item.type_id}>
            <HabilityText>{item.pokemon_v2_type.name}</HabilityText>
          </Hability>
        ))}
      </Habilities>
    </Container>
  );
}