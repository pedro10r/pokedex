import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 48%;
  height: 230px;

  padding: 20px;
  margin-right: 14px;
  margin-top: 20px;

  align-items: center;
  justify-content: center;

  background-color: #48D0B0;
  border-radius: 18px;
`;

export const NumberPokedexArea = styled.View`
  width: 62px;

  position: absolute;
  top: -10px;
  padding: 1px;

  background-color: #FFCB05;
  border-radius: 20px;
`;

export const NumberPokedex = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.primary};

  text-align: center;
`;

export const Bubble = styled.View`
  width: 130px;
  height: 130px;
  margin-bottom: 5px;

  align-items: center;
  justify-content: center;

  background-color: #71E5C9;
  border-radius: 65px;
`;

export const PokemonImage = styled.Image`
  width: 110px;
  height: 110px;
`;

export const PokemonName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(19)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Habilities = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const Hability = styled.View`
  padding: 4px 10px;
  margin-top: 5px;

  background-color: #45C0A3;
  border-radius: 50%;
`;

export const HabilityText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
`;
