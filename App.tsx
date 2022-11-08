import { ThemeProvider } from 'styled-components/native';
import { ApolloProvider } from '@apollo/client';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';

import { PokemonProvider } from '@contexts/pokemon';
import { theme } from './src/styles/themes/default';
import { client } from './src/services/apollo';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });

  return (
    <ApolloProvider client={client}>
      <PokemonProvider>
        <ThemeProvider theme={theme}>
          {fontsLoaded && <Routes />}
        </ThemeProvider>
      </PokemonProvider>
    </ApolloProvider>
  );
}
