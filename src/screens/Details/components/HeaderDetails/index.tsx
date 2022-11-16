import { PokemonDetailsDTO } from '@dtos/PokemonDetailsDTO';

import { usePokemonImage } from '@hooks/pokemonImage';
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
  const { imagePng } = usePokemonImage(data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].id);

  const colorName = data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemoncolor.name;
  const theme = usePokemonColor(colorName);

  const namePokemon = data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].name;

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
              #00{data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].id}
            </NumberPokedex>
          </NumberPokedexArea>

          <PokemonName
            color={isWhiteColor(colorName)}
            largeName={namePokemon.length > 9}
          >
            {capitalized(data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].name)}
          </PokemonName>

          <Habilities>
            {data.pokemon_v2_pokemonspecies_by_pk.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.map((item) => (
              <Hability
                key={item.type_id}
                style={{ backgroundColor: theme?.colors?.support }}
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