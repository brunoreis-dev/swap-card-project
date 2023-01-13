import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey00};
  display: flex;
  height: 64px;
  padding: 0 16px;
  width: 100%;
`;

export const Logo = styled.img`
  margin-right: 16px;
  width: 114px;
`;

export const AppTitle = styled.p`
  ${({ theme }) => theme.fonts.body.normal(500)};
  color:  ${({ theme }) => theme.colors.primary};
`;
