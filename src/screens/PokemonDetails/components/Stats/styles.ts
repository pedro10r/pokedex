import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const StatsHeader = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
  margin-bottom: 10px;
`;

export const GenderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const GenderPercent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Gender = styled.View`
  flex-direction: row;
  margin-left: 15px;
`;

export const PercentText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};

  margin-left: 5px;
`;

export const ContentStats = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
`;

export const TitleStats = styled.Text`
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ValueStats = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Percent = styled.View`
  width: 94px;
  height: 5px;
  background-color: #B7B7B8;
  border-radius: 50%;
  margin-left: 5px;
`;
