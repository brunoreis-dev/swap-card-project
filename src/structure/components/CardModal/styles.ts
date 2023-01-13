import styled from "styled-components";

export const Title = styled.p`
  ${({theme}) => theme.fonts.headings.heading6()};
  color: ${({theme}) => theme.colors.primaryDark};
  margin-bottom: 16px;
`;

export const Fields = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 40px;
`;

export const FieldContainer = styled.div`
  ${({ theme }) => theme.breakpoints.largeMobile} {
    display: grid;
    grid-template-columns: 191px 145px;
    gap: 16px;
    flex-wrap: wrap;
  }
`;

export const FieldContent = styled.div`
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Warning = styled.p`
  ${({theme}) => theme.fonts.body.small()};
  color: ${({theme}) => theme.colors.grey100};
`;

export const Error = styled.p`
  ${({theme}) => theme.fonts.body.small()};
  color: ${({theme}) => theme.colors.error};
  margin-top: 8px;
`;
