import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import "./styles/global.css";
import "./styles/theme.css";

const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>Heading</Heading>
      </Container>
    </>
  );
};

export { App };
