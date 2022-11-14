import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px 15px 0;
`;
