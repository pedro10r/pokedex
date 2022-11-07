import { PokemonDetailsDTO } from '@dtos/PokemonDetailsDTO';
import { SvgUri } from 'react-native-svg';

import { usePokemonSprites } from '@hooks/pokemonSprites';
import { usePokemonColor, isWhiteColor } from '@hooks/pokemonColors';
import { capitalized } from '../../../../utils/capitalized';

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

  const colorName = data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemoncolor.name;
  const { colors } = usePokemonColor(colorName);

  return (
     <>
      <Bubble style={{ backgroundColor: colors?.secondary }}>
        <PokemonImage
          resizeMode="contain"
          source={{ uri: imagePng }}
        />

        {/* In case of use SVG */}
        {/* <SvgUri
          uri={imageSvg}
          width={130}
          height={130}
        /> */}
      </Bubble>

      <Container style={{ backgroundColor: colors?.primary }}>
        <HeaderInfo>
          <NumberPokedexArea>
            <NumberPokedex>
              #00{data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].id}
            </NumberPokedex>
          </NumberPokedexArea>

          <PokemonName color={isWhiteColor(colorName)}>
            {capitalized(data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].name)}
          </PokemonName>

          <Habilities>
            {data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.map((item) => (
              <Hability
                key={item.type_id}
                style={{ backgroundColor: colors?.support }}
              >
                <HabilityText color={isWhiteColor(colorName)}>
                  {capitalized(item.pokemon_v2_type.name)}
                </HabilityText>
              </Hability>
            ))}
          </Habilities>
        </HeaderInfo>
      </Container>
    </>
  );
}