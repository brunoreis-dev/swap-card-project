import axios from "axios";
import { useEffect, useState } from "react";
import { 
  ActionButton,
  CardActions, 
  CardInfos,
  Container,
  DeleteIcon,
  EditIcon,
  Info,
  InfoBlue,
  InfosContent,
  CardImage, 
  InfosContentNoWrap
} from "./styles";

import { Card } from "@typesUtils/card";

import genericImage from "@assets/images/card.png";
import mastercardImage from "@assets/images/mastercard.png";
import visaImage from "@assets/images/visa.png";


type CardProps = {
  card: Card;
  handleOpenEdit: () => void;
  handleOpenDelete: () => void;
}

type Scheme = "visa" | "mastercard" | string;

const CardComponent = ({card, handleOpenEdit, handleOpenDelete}: CardProps) => {
  const [scheme, setScheme] = useState<Scheme>("");

  const setCardImage = () => {
    switch(scheme) {
    case "visa":
      return visaImage.src;
    case "mastercard":
      return mastercardImage.src;
    default:
      return genericImage.src;
    }
  };

  const hiddenNumberInfo = (number: string) => {
    const numberArray = Object.assign([], number);

    if(numberArray.length === 16) {
      return number.split("").reduce((a, v, i) => [8, 9, 10, 11].includes(i) ? a + "*" : a + v, "");
    } else if(numberArray.length === 15) {
      return number.split("").reduce((a, v, i) => [7, 8, 9, 10].includes(i) ? a + "*" : a + v, "");
    } else {
      return number.split("").reduce((a, v, i) => [6, 7, 8, 9].includes(i) ? a + "*" : a + v, "");
    }
  };

  useEffect(() => {
    axios.get(`https://lookup.binlist.net/${card.number}`)
      .then((response) => setScheme(response.data.scheme))
      .catch(() => setScheme(""));
  }, []);
  
  return (
    <Container>
      <CardInfos>
        <CardImage 
          src={setCardImage()}
        />
        <Info>{card.alias}</Info>
        <InfosContent>
          <InfoBlue>{hiddenNumberInfo(card.number)}</InfoBlue>
          <Info>{card.holder}</Info>
        </InfosContent>
        <InfosContentNoWrap>
          <Info>{card.cvc}</Info>
          <Info>{card.expirationDate}</Info>
        </InfosContentNoWrap>
      </CardInfos>
      <CardActions>
        <ActionButton>
          <EditIcon onClick={handleOpenEdit} id="open-edit-card" />
        </ActionButton>
        <ActionButton>
          <DeleteIcon onClick={handleOpenDelete} id="open-delete-card" />
        </ActionButton>
      </CardActions>
    </Container>
  );
};

export default CardComponent;
