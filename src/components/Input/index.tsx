import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import {
  Container,
  IconSearch,
  InputText,
  ButtonSearch,
  Icon
} from './styles';

interface InputProps extends TextInputProps {
  control: Control;
  name: string;
  isError?: boolean;
}

export function Input({ control, name, ...rest }: InputProps) {
  return (
    <Container>
      <IconSearch />

      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange }}) => (
          <InputText
            placeholderTextColor={'#909bb6'}
            value={value}
            onChangeText={onChange}
            {...rest}
          />
        )}
      />

      <ButtonSearch>
        <Icon />
      </ButtonSearch>
    </Container>
  );
}