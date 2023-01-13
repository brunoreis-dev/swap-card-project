import { AppTitle, Container, Logo } from "./styles";
import logo from "@assets/images/logo.png";

const Header = () => {
  return (
    <Container>
      <Logo 
        src={logo.src}
        alt="Swap Logo"
      />
      <AppTitle>My cards</AppTitle>
    </Container>
  );
};

export default Header;
