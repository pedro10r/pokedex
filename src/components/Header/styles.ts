import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ArrowLeft } from 'phosphor-react-native';
import { Platform } from 'react-native';

type Props = {
  hasButton: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: ${Platform.OS === 'ios' ? getStatusBarHeight() + 93 : getStatusBarHeight() + 73}px;

  background-color: ${({ theme }) => theme.colors.primary};

  flex-direction: row;
  align-items: center;
  
  ${({ hasButton }) => hasButton ? css`
    justify-content: flex-start;
  `: css`
    justify-content: center;
  `};

  padding-top: 30px;
  padding-left: 15px;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
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
  width: 150px;
  height: 50px;
`;
