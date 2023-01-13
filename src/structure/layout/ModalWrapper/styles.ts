import { Close } from "@assets/icons";
import styled from "styled-components";

type ModalWrapperStyleProps = {
  active: boolean;
}

export const Container = styled.div<ModalWrapperStyleProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.modalRgba};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: ${({ active }) => active ? "1" : "0"};
  position: fixed;
  top: 0;
  transition: 0.3s ease-in-out;
  visibility: ${({ active }) => active ? "visible" : "hidden"};
  width: 100%;
`;

export const Content = styled.div`
  background-color:  ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey00};
  border-radius: 8px;
  max-width: 416px;
  padding: 38px 32px 24px;
  position: relative;
  width: calc(100% - 16px);
`;

export const CloseButton = styled(Close)`
  position: absolute;
  right: 22px;
  top: 22px;
  cursor: pointer;
`;
