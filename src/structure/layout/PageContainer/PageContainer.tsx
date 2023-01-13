import Header from "@components/Header/Header";
import { ReactNode } from "react";
import { Container } from "./styles";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default PageContainer;
