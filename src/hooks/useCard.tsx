/* eslint-disable functional/immutable-data */
import { Card } from "@typesUtils/card";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface CardContextData {
  addCard: (card: Card) => void;
  editCard: (card: Card) => void;
  deleteCard: (cardId: string) => void;
  cards: Card[];
}

interface CardProviderProps {
  children: ReactNode;
}

const CardContext = createContext<CardContextData>({} as CardContextData);

export function CardProvider({ children }: CardProviderProps): JSX.Element {
  const [cards, setCards] = useState<Card[]>([]);

  const addCard = (card: Card) => {
    const updatedCards = [...cards];

    updatedCards.push(card);
    setCards(updatedCards);
    localStorage.setItem("@Swap:cards", JSON.stringify(updatedCards));
  };

  const deleteCard = (cardId: string) => {
    const updatedCards = [...cards];

    const cardIndex = updatedCards.findIndex(
      (card) => card.id === cardId
    );

    updatedCards.splice(cardIndex, 1);
    setCards(updatedCards);
    localStorage.setItem("@Swap:cards", JSON.stringify(updatedCards));
  };

  const editCard = (card: Card) => {
    const updatedCards = [...cards];

    const oldCard = updatedCards.find(
      (oldCard) => oldCard.id === card.id
    );

    oldCard.alias = card.alias;
    oldCard.cvc = card.cvc;
    oldCard.expirationDate = card.expirationDate;
    oldCard.holder = card.holder;
    oldCard.number = card.number;
    
    setCards(updatedCards);
    localStorage.setItem("@Swap:cards", JSON.stringify(updatedCards));
  };

  useEffect(() => {
    const storageCard = JSON.parse(localStorage.getItem("@Swap:cards"));

    if (storageCard) {
      setCards(storageCard);
    }
  }, []);

  return (
    <CardContext.Provider
      value={{
        addCard,
        cards,
        deleteCard,
        editCard
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export function useCard(): CardContextData {
  const context = useContext(CardContext);

  return context;
}
