import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 64px);
  padding: 0 16px;
  position: relative;
  width: 100%;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0 48px;
  }
`;
