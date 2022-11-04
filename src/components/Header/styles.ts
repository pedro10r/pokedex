import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  height: ${getStatusBarHeight() + 93}px;

  background-color: ${({ theme }) => theme.colors.primary};

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding-top: 30px;
  padding-left: 15px;

  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 80px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 28,
  color: theme.colors.white,
  weight: 'bold'
}))``;


export const Logo = styled.Image`
  width: 142px;
  height: 55px;
`;
