import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Details } from "@screens/Details";
import { Splash } from "@screens/Splash";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="splash"
        component={Splash}
      />
      <Screen
        name="home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen
        name="details"
        component={Details}
      />
    </Navigator>
  );
}