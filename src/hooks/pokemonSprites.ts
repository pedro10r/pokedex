/*
  On the recommendation of PokeApi itself,
  I will request the images by http, so I will use axios (Only for images).

  The origin of the problems: 
  https://github.com/PokeAPI/pokeapi/issues/614
  https://github.com/PokeAPI/pokeapi/discussions/713
*/

/*
  Also added support for svg images, in case of application performance,
  I chose to use PNG as default to follow the requested layout!
*/

export function usePokemonSprites(id: string) {
  const imageSvg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  const imagePng = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return { imageSvg, imagePng };
}