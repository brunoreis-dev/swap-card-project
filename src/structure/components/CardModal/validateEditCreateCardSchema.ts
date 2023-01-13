import * as Yup from "yup";

export const createEditSchema = Yup.object().shape({
  alias: Yup.string().required("Card alias is required"),
  holder: Yup.string().required("Card holder is required"),
  number: Yup.string()
    .required("Insert a valid number between 14 and 16 digits")
    .min(14, "Insert a valid number between 14 and 16 digits")
    .max(16, "Insert a valid number between 14 and 16 digits"),
  expirationDate: Yup.string()
    .required("Insert a valid date")
    .min(7, "Insert a valid date")
    .max(7, "Insert a valid date"),
  cvc: Yup.string()
    .required("At least 3 characters")
    .min(3, "At least 3 characters"),
});
