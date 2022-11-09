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
  const theme = useTheme();

  return (
    <Container>
      <IconSearch />

      <InputText
        testID='input-text'
        placeholderTextColor={theme?.colors?.blue_400}
        {...rest}
      />

      <ButtonSearch
        testID='button-search'
        onPress={onPress}
      >
        <Icon />
      </ButtonSearch>
    </Container>
  );
}