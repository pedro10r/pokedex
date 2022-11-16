import { Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Animated, {
  useAnimatedStyle,
  withTiming,
  withSequence,
  runOnJS
} from 'react-native-reanimated';

import logoPng from '../../assets/logo.png'

import { Container } from './styles';

export function Splash() {
  const navigation = useNavigation();

  function startApp() {
    navigation.navigate('home');
  }

  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withSequence(
            withTiming(360 + 'deg', { duration: 1000 }),
            withTiming(0 + 'deg', { duration: 1000 },
              () => {
                runOnJS(startApp)();
              }
            )
          ),
        },
      ],
    }
  })

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Animated.View style={logoStyle}>
        <Image
          source={logoPng}
          style={{
            width: 192,
            height: 70
          }}
        />
      </Animated.View>
    </Container>
  );
}