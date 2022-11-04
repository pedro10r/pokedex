import { StatusBar, TouchableOpacityProps } from 'react-native';

import logo from '../../assets/logo.png';

import { Container, Logo, BackButton, Icon } from './styles';

type Props = TouchableOpacityProps & {}

export function Header({ ...rest }: Props) {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <BackButton {...rest}>
        <Icon />
      </BackButton>

      <Logo source={logo} />
    </Container>
  );
}