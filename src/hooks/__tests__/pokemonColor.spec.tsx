import React from 'react';
import { renderHook } from '@testing-library/react-native';

import { usePokemonColor, isWhiteColor } from '../pokemonColors';

describe('Hook of colors pokemon', () => {

  describe('Received white color', () => {
    it('should return color is white', () => {
      const { result } = renderHook(() => isWhiteColor('white'));
  
      expect(result).toEqual({ current: '#302F2F' });
    });

    it('should return color is NOT white', () => {
      const { result } = renderHook(() => isWhiteColor('black'));
  
      expect(result).toEqual({ current: undefined });
    });
  });


  describe('if received pokemon colors ', () => {
    it('should return a 3 colors if received color to equal black', () => {
      const { result } = renderHook(() => usePokemonColor('black'));
  
      expect(result.current?.colors).toEqual({
        primary: undefined,
        secondary: undefined,
        support: undefined,
      });
    });

    it('should return a 3 colors if received color to equal brown', () => {
      const { result } = renderHook(() => usePokemonColor('brown'));
  
      expect(result.current?.colors).toEqual({
        primary: undefined,
        secondary: undefined,
        support: undefined,
      });
    });

    it('should return a 3 colors if received color to equal gray', () => {
      const { result } = renderHook(() => usePokemonColor('gray'));
  
      expect(result.current?.colors).toEqual({
        primary: undefined,
        secondary: undefined,
        support: undefined,
      });
    });

    it('should return a 3 colors if received color to equal green', () => {
      const { result } = renderHook(() => usePokemonColor('green'));
  
      expect(result.current?.colors).toEqual({
        primary: undefined,
        secondary: undefined,
        support: undefined,
      });
    });

    it('should return a 3 colors if received color to equal pink', () => {
      const { result } = renderHook(() => usePokemonColor('pink'));
  
      expect(result.current?.colors).toEqual({
        primary: undefined,
        secondary: undefined,
        support: undefined,
      });
    });

    it('should return a 3 colors if received color to equal blue', () => {
      const { result } = renderHook(() => usePokemonColor('blue'));
  
      expect(result.current?.colors).toEqual({
        primary: undefined,
        secondary: undefined,
        support: undefined,
      });
    });

    it('should return a 3 colors if received color to equal purple', () => {
      const { result } = renderHook(() => usePokemonColor('purple'));
  
      expect(result.current?.colors).toEqual({
        primary: undefined,
        secondary: undefined,
        support: undefined,
      });
    });

    it('should return a 3 colors if received color to equal red', () => {
      const { result } = renderHook(() => usePokemonColor('red'));
  
      expect(result.current?.colors).toEqual({
        primary: undefined,
        secondary: undefined,
        support: undefined,
      });
    });

    it('should return a 3 colors if received color to equal white', () => {
      const { result } = renderHook(() => usePokemonColor('white'));
  
      expect(result.current?.colors).toEqual({
        primary: undefined,
        secondary: undefined,
        support: undefined,
      });
    });

    it('should return a 3 colors if received color to equal yellow', () => {
      const { result } = renderHook(() => usePokemonColor('yellow'));
  
      expect(result.current?.colors).toEqual({
        primary: undefined,
        secondary: undefined,
        support: undefined,
      });
    });

    it('should return colors when received invalid color', () => {
      const { result } = renderHook(() => usePokemonColor('blackss'));
  
      expect(result.current).toEqual({
        colors: {
          primary: 'transparent',
          secondary: 'transparent',
          support: 'transparent',
        }
      });
    });
  });
});