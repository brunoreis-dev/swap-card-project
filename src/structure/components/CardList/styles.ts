import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 840px;
  padding: 80px 0;
  width: 100%;
`;

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 36px;
  width: 100%;
`;

export const ListTitle = styled.h1`
  ${({ theme }) => theme.fonts.headings.heading1()};
  color:  ${({ theme }) => theme.colors.primary};
`;

export const List = styled.div`
  display: grid;
  gap: 16px;
`;

export const NoCardsContent = styled.div`
  margin: 0 auto;
  max-width: 229px;
`;

export const NoCardsTitle = styled.p`
  ${({ theme }) => theme.fonts.headings.heading4()};
  color:  ${({ theme }) => theme.colors.grey100};
  margin-bottom: 8px;
  text-align: center;
`;

export const NoCardsSubtitle = styled.p`
  ${({ theme }) => theme.fonts.body.medium()};
  color:  ${({ theme }) => theme.colors.grey100};
  text-align: center;
`;
