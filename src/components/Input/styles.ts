import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MagnifyingGlass, ArrowCircleRight } from 'phosphor-react-native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 22px;

  width: 100%;
  height: 52px;
  padding: 16px;
  
  background-color: ${({ theme }) => theme.colors.white};
  
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_support};
  border-radius: 50px;
`;

export const IconSearch = styled(MagnifyingGlass).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.primary_support,
}))`
  margin-right: 12px;
`;

export const InputText = styled.TextInput`
  flex: 1;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ButtonSearch = styled.TouchableOpacity``;

export const Icon = styled(ArrowCircleRight).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.primary,
  weight: 'fill'
}))`
  margin-left: 12px;
`;
