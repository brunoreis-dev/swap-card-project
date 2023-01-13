import styled from "styled-components";
import InputMask from "react-input-mask";

type InputComponentStyleProps = {
  error?: boolean;
};

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  ${({theme}) => theme.fonts.body.normal(500)};
  color: ${({theme}) => theme.colors.primary};
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input<InputComponentStyleProps>`
  ${({theme}) => theme.fonts.body.normal()};
  background-color: ${({theme}) => theme.colors.background};
  border: 1px solid ${({ theme, error }) => error ? theme.colors.error : theme.colors.grey75};
  border-radius: 8px;
  color: ${({theme}) => theme.colors.grey800};
  padding: 10px 44px 10px 20px;
  transition: 0.3s ease-in-out;
  width: 100%;

  &:placeholder {
    color: ${({theme}) => theme.colors.grey100};
  }
`;

export const InputMaskComponent = styled(InputMask)<InputComponentStyleProps>`
  ${({theme}) => theme.fonts.body.normal()};
  background-color: ${({theme}) => theme.colors.background};
  border: 1px solid ${({ theme, error }) => error ? theme.colors.error : theme.colors.grey75};
  border-radius: 8px;
  color: ${({theme}) => theme.colors.grey800};
  padding: 10px 44px 10px 20px;
  transition: 0.3s ease-in-out;
  width: 100%;

  &:placeholder {
    color: ${({theme}) => theme.colors.grey100};
  }
`;
