import React from 'react';
import { render } from '@testing-library/react-native';

import { Input } from '@components/Input';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../styles/themes/default';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

describe('Input Component', () => {
  it('should be show text input and button search', () => {
    const { getByTestId } = render(
      <Input />,
      {
        wrapper: Providers
      }
    );

    expect(getByTestId('input-text')).toBeTruthy();
    expect(getByTestId('button-search')).toBeTruthy();
  });
});