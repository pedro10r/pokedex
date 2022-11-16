import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white}
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px 15px 0;
  padding-bottom: ${Platform.OS === 'ios' ? getBottomSpace() : 15}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
`;
