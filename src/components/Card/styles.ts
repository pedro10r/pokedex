import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
  color?: string;
  isTwoTypes?: boolean;
  largeName?: boolean;
}

export const Container = styled.TouchableOpacity`
  width: 48%;
  height: 235px;

  padding: 15px;
  margin-right: 14px;
  margin-top: 20px;

  align-items: center;
  justify-content: center;

  border-radius: 18px;
`;

export const NumberPokedexArea = styled.View`
  position: absolute;
  top: -10px;
  padding: 1px 6px;

  background-color: ${({ theme }) => theme.colors.warning};
  border-radius: 20px;
`;

export const NumberPokedex = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.primary};

  text-align: center;
`;

export const Bubble = styled.View`
  width: 135px;
  height: 135px;
  margin-bottom: 5px;
  margin-top: 5px;

  align-items: center;
  justify-content: center;

  border-radius: 100px;
`;

export const PokemonImage = styled.Image`
  width: 140px;
  height: 140px;
`;

export const PokemonName = styled.Text<Props>`
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ largeName }) => largeName ? RFValue(12) : RFValue(19)}px;
  color: ${({ theme, color }) => color ? color : theme.colors.white};
  text-align: center;

  margin-top: ${({ largeName }) => largeName ? 5 : 0}px;
  margin-bottom: ${({ largeName }) => largeName ? 5 : 0}px;
`;

export const Habilities = styled.View<Props>`
  width: 100%;
  flex-direction: row;
  
  ${({ isTwoTypes }) =>
    isTwoTypes ?
    css`
      justify-content: space-between;
    ` : css`
      justify-content: center;
    `
  }
`;

export const Hability = styled.View`
  width: 48%;

  padding: 4px 0;
  margin-top: 7px;

  border-radius: 100px;
`;

export const HabilityText = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, color }) => color ? color : theme.colors.white};
  text-align: center;
`;
