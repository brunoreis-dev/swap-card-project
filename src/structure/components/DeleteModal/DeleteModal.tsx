import Button from "@commons/Button/Button";
import { useCard } from "@hooks/useCard";
import ModalWrapper from "@layout/ModalWrapper/ModalWrapper";
import {
  ButtonContainer,
  WarningIcon,
  WarningText,
} from "./styles";

type DeleteModalProps = {
  active: boolean;
  onClose: () => void;
  id: string;
}

const DeleteModal = ({ active, onClose, id }: DeleteModalProps) => {
  const { deleteCard } = useCard(); 

  const handleDelete = () => {
    deleteCard(id);
    onClose();
  };
  return (
    <ModalWrapper
      active={active}
      onClose={onClose}
    > 
      <WarningIcon />
      <WarningText>Are you sure you want delete this card?</WarningText>
      <ButtonContainer>
        <Button text="Yes, I'm sure" style="error" onClick={handleDelete} id="delete-card" />
        <Button text="No, cancel" style="bordered" onClick={onClose} id="close-delete-card" />
      </ButtonContainer>
    </ModalWrapper>
  );
};

export default DeleteModal;
