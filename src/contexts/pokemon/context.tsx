import React, { createContext } from "react";
import { useQuery } from "@apollo/client";

import { LOAD_POKEMONS } from "../../graphQL/pokemon/queries";
import { PokemonDTO } from '@dtos/PokemonDTO';

type PokemonContextData = {
  data: PokemonDTO | undefined;
  loading: boolean;
}

interface PokemonProviderProps {
  children: React.ReactNode;
}

export const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData);

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const { data, loading } = useQuery<PokemonDTO | undefined>(LOAD_POKEMONS);

  return (
    <PokemonContext.Provider
      value={{
        data,
        loading 
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}