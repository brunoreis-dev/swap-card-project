import { ReactNode } from "react";
import { Container, IconContainerAfter, IconContainerBefore } from "./styles";

type ButtonProps = {
  text: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  loading?: boolean;
  onClick?: () => void;
  style?: "bordered" | "error";
  type?: "submit";
  id: string;
};

const Button = ({
  text,
  iconBefore,
  iconAfter,
  loading,
  onClick,
  style, 
  type,
  id
}: ButtonProps) => {
  return (
    <Container onClick={onClick} style={style} type={type} id={id}>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {iconBefore && (
            <IconContainerBefore>
              {iconBefore}
            </IconContainerBefore>
          )}
          
          {text}

          {iconAfter && (
            <IconContainerAfter>
              {iconAfter}
            </IconContainerAfter>
          )}
          
          
        </>
      )}
    </Container>
  );
};

export default Button;
