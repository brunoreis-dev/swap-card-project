import CardList from "@components/CardList/CardList";
import { CardProvider } from "@hooks/useCard";
import PageContainer from "@layout/PageContainer/PageContainer";

export default function Home() {
  return (
    <CardProvider>
      <PageContainer>
        <CardList />
      </PageContainer>
    </CardProvider>
    
  );
}
