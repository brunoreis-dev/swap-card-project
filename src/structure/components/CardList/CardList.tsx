import Button from "@commons/Button/Button";
import CardComponent from "@components/CardComponent/CardComponent";
import CardModal from "@components/CardModal/CardModal";
import DeleteModal from "@components/DeleteModal/DeleteModal";
import { useCard } from "@hooks/useCard";
import { Card } from "@typesUtils/card";
import { useState } from "react";
import { Container, List, ListTitle, NoCardsContent, NoCardsSubtitle, NoCardsTitle, TitleContainer} from "./styles";


const CardList = () => {
  const { cards } = useCard();
  const [openModalNewCard, setOpenModalNewCard] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [selectedCard, setSelectedCard] = useState<Card>(null);

  const openDeleteCard = (id: string) => {
    setOpenDeleteModal(true);
    setSelectedId(id);   
  };

  const openEditCard = (id: string) => {
    setOpenEditModal(true);
    
    const card = cards.find(
      (card) => card.id === id
    ); 

    setSelectedCard(card);   
  };

  return (
    <Container>
      <CardModal addAction active={openModalNewCard} onClose={() => setOpenModalNewCard(false)} />
      <CardModal card={selectedCard} active={openEditModal} onClose={() => setOpenEditModal(false)} />
      <DeleteModal id={selectedId} active={openDeleteModal} onClose={() => setOpenDeleteModal(false)} />
      <TitleContainer>
        <ListTitle>My cards</ListTitle>
        <Button id="add-new-card" text="Add new card" onClick={() => setOpenModalNewCard(true)} />
      </TitleContainer>
      {cards.length > 0 ? (
        <List id="card-list">
          {cards.map(card => (
            <CardComponent 
              key={card.id}
              card={card}
              handleOpenDelete={() => openDeleteCard(card.id)}
              handleOpenEdit={() => openEditCard(card.id)}
            />
          ))}
        </List>
      ) : (
        <NoCardsContent>
          <NoCardsTitle>No cards yet</NoCardsTitle>
          <NoCardsSubtitle>When you have cards you'll see them here</NoCardsSubtitle>
        </NoCardsContent>
      )}
    </Container>
  );
};

export default CardList;
