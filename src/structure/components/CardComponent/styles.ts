import { Edit, Trash } from "@assets/icons";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  padding: 16px;
  transition: 0.3s ease-in-out;
  width: 100%;

  &:hover {
    box-shadow: 0px 1px 20px 6px rgba(0, 0, 0, 0.08);

    svg {
      path {
        stroke: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const CardInfos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  
  ${({ theme }) => theme.breakpoints.tablet} {
    display: grid;
    grid-template-columns: 62px 188px auto auto;  
    gap: 16px;
  }
`;

export const CardImage = styled.img`
  height: 28px;
  width: 42px;
`;

export const InfosContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 10px;
  }
`;

export const InfosContentNoWrap = styled(InfosContent)`
  flex-direction: row;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: column;
  }
`;

export const Info = styled.p`
  ${({ theme }) => theme.fonts.body.medium()};
  color: ${({ theme }) => theme.colors.grey100};
`;

export const InfoBlue = styled(Info)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 60px;

  ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-direction: row;
    margin-left: 0;
  }
`;

export const ActionButton = styled.div`
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 36px;
  transition: 0.3s ease-in-out;
  width: 36px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey50};
  }
`;

export const EditIcon = styled(Edit)`
  path {
    transition: 0.3s ease-in-out;
  }
`;

export const DeleteIcon = styled(Trash)`
  path {
    transition: 0.3s ease-in-out;
  }
`;
