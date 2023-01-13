import uuid from "react-uuid";
import Button from "@commons/Button/Button";
import InputComponent from "@commons/InputComponent/InputComponent";
import { useCard } from "@hooks/useCard";
import ModalWrapper from "@layout/ModalWrapper/ModalWrapper";
import { Field, Form, Formik } from "formik";
import {
  ButtonContainer,
  Error,
  FieldContainer,
  FieldContent,
  Fields,
  Title,
  Warning,
} from "./styles";
import { createEditSchema } from "./validateEditCreateCardSchema";
import { Card } from "@typesUtils/card";

type CardModalProps = {
  onClose: () => void;
  active: boolean;
  addAction?: boolean;
  card?: Card;
}

const CardModal = ({onClose, active, addAction, card}: CardModalProps) => {
  const { addCard, editCard } = useCard();

  const initialFormValues = {
    alias: card ? card.alias : "",
    holder: card ? card.holder : "",
    number: card ? card.number : "",
    expirationDate: card ? card.expirationDate : "",
    cvc: card ? card.cvc : ""
  };

  const handleSubmit = ({ values }) => {
    if(addAction) {
      const newCard = {
        ...values,
        id: uuid(),
      };
  
      addCard(newCard);
    } else {
      editCard({
        ...values,
        id: card.id,
      });
    }
    
    onClose();
  };

  return (
    <ModalWrapper
      active={active}
      onClose={onClose}
    >
      <Title>{addAction ? "Add new card" : "Edit card"}</Title>
      <Formik
        initialValues={initialFormValues}
        onSubmit={(values, { resetForm }) => {
          handleSubmit({ values });
          resetForm();
        }}
        validationSchema={createEditSchema}
        validateOnBlur={false}
        validateOnChange={false}
        enableReinitialize={true}
      >
        {({ errors }) => (
          <Form>
            <Fields>
              <FieldContent>
                <Field name="alias">
                  {(({field}) => (
                    <InputComponent
                      field={field}
                      label="Card Alias*"
                      type="text"
                      name="alias"
                      placeholder="e.g. Compras da Blackfriday"
                      error={!!errors.alias}
                    />
                  ))}
                </Field>
                {errors.alias && <Error>{errors.alias}</Error>}
              </FieldContent>
              <FieldContent>
                <Field name="holder">
                  {(({field}) => (
                    <InputComponent
                      field={field}
                      label="Card holder*"
                      type="text"
                      name="holder"
                      error={!!errors.holder}
                    />
                  ))}
                </Field>
                {errors.holder && <Error>{errors.holder}</Error>}
              </FieldContent>
              <FieldContent>
                <Field name="number">
                  {(({field}) => (
                    <InputComponent
                      field={field}
                      label="Credit/debit card number*"
                      type="text"
                      name="number"
                      error={!!errors.number}
                      mask="9999999999999999"
                    />
                  ))}
                </Field>
                {errors.number && <Error>{errors.number}</Error>}
              </FieldContent>
              <FieldContainer>
                <FieldContent>
                  <Field name="expirationDate">
                    {(({field}) => (
                      <InputComponent
                        field={field}
                        label="Expiration month and year*"
                        type="text"
                        name="expirationDate"
                        error={!!errors.expirationDate}
                        mask="99/9999"
                      />
                    ))}
                  </Field>
                  {errors.expirationDate && <Error>{errors.expirationDate}</Error>}
                </FieldContent>
                <FieldContent>
                  <Field name="cvc">
                    {(({field}) => (
                      <InputComponent
                        field={field}
                        label="CVC*"
                        type="text"
                        name="cvc"
                        error={!!errors.cvc}
                        mask="9999"
                      />
                    ))}
                  </Field>
                  {errors.cvc && <Error>{errors.cvc}</Error>}
                </FieldContent>
              </FieldContainer>
              <Warning>*This field is mandatory</Warning>
            </Fields>
            
            <ButtonContainer>
              <Button text={addAction ? "Add card" : "Edit"} type="submit" id={addAction ? "add-card" : "edit-card"} />
              <Button text="cancel" style="bordered" onClick={onClose} id={addAction ? "close-add-card" : "close-edit-card"} />
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default CardModal;
