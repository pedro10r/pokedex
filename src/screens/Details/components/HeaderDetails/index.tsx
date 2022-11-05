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

export function HeaderDetails() {
  return (
     <>
      <Bubble>
        <PokemonImage
          resizeMode="contain"
          source={{ uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" }}
        />
      </Bubble>

      <Container>
        <HeaderInfo>
          <NumberPokedexArea>
            <NumberPokedex>#001</NumberPokedex>
          </NumberPokedexArea>

          <PokemonName>Bulbasaur</PokemonName>

          <Habilities>
            <Hability>
              <HabilityText>Grass</HabilityText>
            </Hability>

            <Hability>
              <HabilityText>Poison</HabilityText>
            </Hability>
          </Habilities>
          </HeaderInfo>
      </Container>
    </>
  );
}