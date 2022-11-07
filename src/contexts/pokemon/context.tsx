import React, { createContext } from "react";
import { useQuery } from "@apollo/client";

import { LOAD_POKEMONS } from "../../graphQL/queries";
import { PokemonDTO } from '@dtos/PokemonDTO';

type PokemonContextData = {
  pokemons: PokemonDTO;
  loading: boolean;
}

interface PokemonProviderProps {
  children: React.ReactNode;
}

export const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData);

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const { data, loading } = useQuery(LOAD_POKEMONS);

  return (
    <PokemonContext.Provider
      value={{
        pokemons: data,
        loading 
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}