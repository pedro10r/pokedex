import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { Card } from '@components/Card';
import { theme } from '../../../styles/themes/default';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

const data = {
  id: 1,
  name: 'bulbasaur',
  pokemon_v2_pokemontypes: [
    {
      type_id: 1,
      pokemon_v2_type: {
        name: 'Poison',
      },
    }
  ],
  pokemon_v2_pokemonspecy: {
    pokemon_v2_pokemoncolor: {
      name: 'green'
    }
  }
}

describe('Card Component', () => {
  it('should be rendered a component', () => {
    render(
      <Card data={data} />,
      {
        wrapper: Providers
      }
    );
  });
});