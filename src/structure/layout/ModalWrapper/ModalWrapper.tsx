import { ReactNode } from "react";
import { CloseButton, Container, Content } from "./styles";

type BackgroundProps = {
  children: ReactNode;
  onClose: () => void;
  active: boolean;
};

const ModalWrapper = ({ children, onClose, active }: BackgroundProps) => {
  return (
    <Container active={active}>
      <Content>
        <CloseButton onClick={onClose}/>
        {children}
      </Content>
    </Container>
  );
};

export default ModalWrapper;
