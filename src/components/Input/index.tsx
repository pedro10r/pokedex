import { TextInputProps } from 'react-native';

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
  return (
    <Container>
      <IconSearch />

      <InputText
        placeholderTextColor={'#909bb6'}
        {...rest}
      />

      <ButtonSearch onPress={onPress}>
        <Icon />
      </ButtonSearch>
    </Container>
  );
}