import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import MainForm from "../../components/MainForm";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Início | FocusMind";
  }, []);

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
