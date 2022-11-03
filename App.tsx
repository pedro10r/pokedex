import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';

import { theme } from './src/styles/themes/default';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
