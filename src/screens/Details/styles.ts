import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px 15px 0;
`;

export const ContentDetails = styled.View`
  width: 100%;
  padding: 22px;
  margin-bottom: ${getBottomSpace()}px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const DetailsGroup = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin-top: 15px;
`;

export const DetailInfo = styled.View``;

export const DetailInfoText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.primary_support};
  text-align: center;

  margin-bottom: 4px;
`;

export const DetailInfoAreaValue = styled.View`
  padding: 3px 10px;

  align-items: center;
  justify-content: center;

  background-color: #45C0A3;
  border-radius: 50%;
`;

export const DetailInfoValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
`;