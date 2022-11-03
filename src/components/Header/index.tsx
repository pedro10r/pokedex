import { StatusBar } from 'react-native';

import logo from '../../assets/logo.png';

import { Container, Logo, BackButton, Icon } from './styles';

export function Header() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <BackButton>
        <Icon />
      </BackButton>

      <Logo source={logo} />
    </Container>
  );
}