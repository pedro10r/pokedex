import { Container } from './styles';
import LottieView from 'lottie-react-native';

import loadAnimation from '../../assets/loadAnimation.json';

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={loadAnimation}
        autoPlay
        resizeMode='contain'
        style={{ height: 50 }}
        loop
      />

    </Container>
  );
}