import { PokemonDetailsDTO } from '@dtos/PokemonDetailsDTO';
import { SvgUri } from 'react-native-svg';

import { usePokemonSprites } from '@hooks/pokemonSprites';

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
  data: PokemonDetailsDTO;
}

export function HeaderDetails({ data }: Props) {
  const { imageSvg, imagePng } = usePokemonSprites(data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].id);

  return (
     <>
      <Bubble>
        <PokemonImage
          resizeMode="contain"
          source={{ uri: imagePng }}
        />

        {/* In case of use SVG */}
        {/* <SvgUri
          uri={imageSvg}
          width={120}
          height={120}
        /> */}
      </Bubble>

      <Container>
        <HeaderInfo>
          <NumberPokedexArea>
            <NumberPokedex>#00{data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].id}</NumberPokedex>
          </NumberPokedexArea>

          <PokemonName>{data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].name}</PokemonName>

          <Habilities>
            {data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.map((item) => (
              <Hability key={item.type_id}>
                <HabilityText>{item.pokemon_v2_type.name}</HabilityText>
              </Hability>
            ))}
          </Habilities>
        </HeaderInfo>
      </Container>
    </>
  );
}