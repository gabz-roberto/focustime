import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import MainForm from "../../components/MainForm";

const Home = () => {
  return (
    <MainTemplate>
      <Container>
        <Countdown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
};

export default Home;
