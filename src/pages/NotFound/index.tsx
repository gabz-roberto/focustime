import { Container } from "../../components/Container";
import Generic from "../../components/Generic";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

const NotFound = () => {
  return (
    <MainTemplate>
      <Container>
        <Generic>
          <Heading>Página não encontrada</Heading>
          <h2>:-/</h2>
        </Generic>
      </Container>
    </MainTemplate>
  );
};

export default NotFound;
