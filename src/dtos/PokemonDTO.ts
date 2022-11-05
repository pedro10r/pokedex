type PokemonDTO = {
  id: number,
  name: string;
  height: number,
  weight: number,
  species: {
    url: {
      flavor_text_entries: [
        {
          flavor_text: string,
        }
      ]
    }
  },
  sprites: {
    front_default: string;
  },
  stats: [
    {
      base_stat: number,
      stat: {
        name: string,
      }
    }
  ]
  types: [
    {
      type: {
        name: string;
      }
    }
  ]
}