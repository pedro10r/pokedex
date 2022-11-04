import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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
  left: 25px;
  top: 20px;

  width: 140px;
  height: 140px;
  margin-bottom: 5px;

  align-items: center;
  justify-content: center;

  background-color: #71E5C9;
  border-radius: 70px;
`;

export const PokemonImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const HeaderInfo = styled.View`
  margin-right: 40px;
`;

export const NumberPokedexArea = styled.View`
  width: 55px;
  padding: 2px;
  margin-bottom: 10px;

  background-color: #FFCB05;
  border-radius: 20px;
`;

export const NumberPokedex = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};

  text-align: center;
`;

export const PokemonName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(23)}px;
  color: ${({ theme }) => theme.colors.white};

  margin-bottom: 10px;
`;

export const Habilities = styled.View`
  flex-direction: row;
  justify-content: space-between
`;

export const Hability = styled.View`
  padding: 4px 10px;

  background-color: #45C0A3;
  border-radius: 50%;
`;

export const HabilityText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
`;