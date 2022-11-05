import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 150px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  background-color: #48D0B0;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`;

export const Bubble = styled.View`
  position: absolute;
  z-index: 100;
  left: 35px;
  top: 33px;

  width: 150px;
  height: 150px;
  margin-bottom: 5px;

  align-items: center;
  justify-content: center;

  background-color: #71E5C9;
  border-radius: 75px;
`;

export const PokemonImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const HeaderInfo = styled.View`
  margin-right: 30px;
`;

export const NumberPokedexArea = styled.View`
  width: 60px;
  padding: 4px;
  margin-bottom: 10px;

  background-color: #FFCB05;
  border-radius: 20px;
`;

export const NumberPokedex = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.primary};

  text-align: center;
`;

export const PokemonName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.white};

  margin-bottom: 10px;
  margin-right: ${Platform.OS === 'android' ? 5 : 2}px;
`;

export const Habilities = styled.View`
  flex-direction: row;
  justify-content: space-between
`;

export const Hability = styled.View`
  padding: 4px 10px;

  background-color: #45C0A3;
  border-radius: 100px;
`;

export const HabilityText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.white};
`;