import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

type Props = {
  color?: string;
}

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
  
  border-radius: 75px;
`;

export const Container = styled.View`
  width: 100%;
  height: 150px;

  align-items: flex-end;
  justify-content: center;

  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`;

export const PokemonImage = styled.Image`
  width: 130px;
  height: 130px;
`;

export const HeaderInfo = styled.View`
  width: 50%;
  padding-left: 10px;
  align-items: flex-start;
`;

export const NumberPokedexArea = styled.View`
  padding: 4px 8px;
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.warning};
  border-radius: 20px;
`;

export const NumberPokedex = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.primary};

  text-align: center;
`;

export const PokemonName = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme, color }) => color ? color : theme.colors.white};

  margin-bottom: 10px;
  margin-right: ${Platform.OS === 'android' ? 5 : 2}px;
`;

export const Habilities = styled.View`
  width: 90%;
  padding-right: 15px;
  flex-direction: row;
`;

export const Hability = styled.View`
  padding: 4px 10px;
  margin-right: 8px;

  border-radius: 100px;
`;

export const HabilityText = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme, color }) => color ? color : theme.colors.white};
`;