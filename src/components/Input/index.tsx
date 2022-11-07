import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  IconSearch,
  InputText,
  ButtonSearch,
  Icon
} from './styles';

interface InputProps extends TextInputProps {
  onPress?: () => void;
}

export function Input({ onPress, ...rest }: InputProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <IconSearch />

      <InputText
        placeholderTextColor={colors.blue_400}
        {...rest}
      />

      <ButtonSearch onPress={onPress}>
        <Icon />
      </ButtonSearch>
    </Container>
  );
}