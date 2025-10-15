import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import MainForm from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const Home = (props: HomeProps) => {
  console.log(props);

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
