import { FormikValues } from "formik";
import { Container, Input, InputMaskComponent, Label } from "./styles";

type InputTypes = "text" | "password" | "email" | "number";

type InputComponentProps = {
  label?: string;
  type: InputTypes;
  name: string;
  labelBgColor?: string;
  placeholder?: string;
  error?: boolean;
  field?: FormikValues;
  disabled?: boolean;
  value?: string;
  mask?: string;
};

const InputComponent = ({
  label,
  type,
  name,
  placeholder,
  error,
  field,
  value,
  mask
}: InputComponentProps) => {
  return (
    <Container>
      {!!label && <Label>{label}</Label>}
      {mask ? (
        <InputMaskComponent
          {...(field as object || {})}
          error={error ? 1 : 0}
          placeholder={placeholder}
          name={name}
          value={value ? value : field.value}
          mask={mask}
          maskChar=""
        />
      ) : (
        <Input
          {...(field as object || {})}
          error={error}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value ? value : field.value}
        />
      )}
      
    </Container>
  );
};

export default InputComponent;
