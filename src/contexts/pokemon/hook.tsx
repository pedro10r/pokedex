import { useContext } from "react";

import { PokemonContext } from "./context";

export function usePokemon() {
  return useContext(PokemonContext);
}