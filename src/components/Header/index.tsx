import { StatusBar, TouchableOpacityProps } from 'react-native';

import logo from '../../assets/logo.png';

import { Container, Logo, BackButton, Icon } from './styles';

type Props = {
  onPress: () => void;
}

export function Header({ onPress }: Props) {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <BackButton onPress={onPress}>
        <Icon />
      </BackButton>

      <Logo source={logo} />
    </Container>
  );
}