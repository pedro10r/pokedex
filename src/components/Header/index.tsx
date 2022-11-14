import { StatusBar, TouchableOpacityProps } from 'react-native';

import logo from '../../assets/logo.png';

import { Container, Logo, BackButton, Icon } from './styles';

type Props = {
  hasButton?: boolean;
  onPress?: () => void;
}

export function Header({ hasButton = true, onPress }: Props) {
  return (
    <Container
      hasButton={hasButton}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      {hasButton && (
        <BackButton onPress={onPress}>
          <Icon />
        </BackButton>
      )}

      <Logo
        source={logo}
      />
    </Container>
  );
}