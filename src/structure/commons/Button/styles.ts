import styled from "styled-components";

type ButtonStyleProps = {
  style?: "bordered" | "error";
}

const colorStyle = ({ theme, style }) => {
  switch (style) {
  case "bordered":
    return "transparent";
  case "error":
    return theme.colors.error;
  default:
    return theme.colors.primary;
  }
};

export const Container = styled.button<ButtonStyleProps>`
  ${({theme }) => theme.fonts.body.normal()};
  align-items: center;
  background-color: ${({theme, style}) => colorStyle({theme, style})};
  border: ${({theme, style}) => style === "bordered" ? `1px solid ${theme.colors.grey00}` : "none"};
  border-radius: 8px;
  color: ${({theme, style}) => style === "bordered" ? theme.colors.black : theme.colors.white};
  display: flex;
  height: 37px;
  justify-content: center;
  padding: 0 12px;
  transition: 0.3s ease-in-out;
  width: 100%;
  white-space: nowrap;

  ${({theme}) => theme.breakpoints.largeMobile} {
    width: min-content;
  }

  &:hover {
    filter: brightness(0.7);
  }
`;

export const IconContainer = styled.div`
  min-width: 13px;
  width: 13px;
`;

export const IconContainerBefore = styled(IconContainer)`
  margin-right: 10px;
`;

export const IconContainerAfter = styled(IconContainer)`
  margin-left: 10px;
`;
