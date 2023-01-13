import { Warning } from "@assets/icons";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const WarningIcon = styled(Warning)`
  display: block;
  margin: 0 auto 22px;
`;

export const WarningText = styled.p`
  ${({theme}) => theme.fonts.body.medium()};
  color: ${({theme}) => theme.colors.grey100};
  margin-bottom: 24px;
  text-align: center;
`;
