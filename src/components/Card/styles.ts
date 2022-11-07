import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 48%;
  height: 235px;

  padding: 20px;
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
  width: 135px;
  height: 135px;
  margin-bottom: 5px;
  margin-top: 5px;

  align-items: center;
  justify-content: center;

  border-radius: 100px;
`;

export const PokemonImage = styled.Image`
  width: 115px;
  height: 115px;
`;

export const PokemonName = styled.Text`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(19)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Habilities = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const Hability = styled.View`
  padding: 4px 10px;
  margin-top: 7px;

  border-radius: 100px;
`;

export const HabilityText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
