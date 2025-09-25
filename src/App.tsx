import { Container } from "./components/Container";
import { Countdown } from "./components/Countdown";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";

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
            <Input id='task' label='Tarefa' type='text' />
          </div>
          <div className='formSection'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formSection'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>
          <div className='formSection'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export { App };
