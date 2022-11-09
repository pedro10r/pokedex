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
    { children }
  </ThemeProvider>
);

describe('Input Component', () => {
  it('the component renderer', () => {
    render(
      <Input />,
      {
        wrapper: Providers
      }
    );
  });
});