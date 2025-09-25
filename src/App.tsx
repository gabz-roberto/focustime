import { PlayCircleIcon } from "lucide-react";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Countdown } from "./components/Countdown";
import { Cycles } from "./components/Cycles";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>
      <Container>
        <form action='' id='form'>
          <div className='formSection'>
            <Input
              id='task'
              label='Tarefa'
              type='text'
              placeholder='Digite a tarefa...'
            />
          </div>
          <div className='formSection'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formSection'>
            <Cycles />
          </div>
          <div className='formSection'>
            <Button id='send' label={<PlayCircleIcon />} color='default' />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export { App };
