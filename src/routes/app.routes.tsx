import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { PokemonDetails } from "@screens/PokemonDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="pokemon_details"
        component={PokemonDetails}
      />
    </Navigator>
  );
}