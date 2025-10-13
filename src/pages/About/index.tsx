import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import Generic from "../../components/Generic";
import { Heading } from "../../components/Heading";

const About = () => {
  return (
    <MainTemplate>
      <Container>
        <Generic>
          <Heading>Sobre o Pomodoro</Heading>
          <p>
            A técnica Pomodoro é um método de gestão do tempo criado por
            <strong>Francesco Cirillo</strong> no final dos anos 1980. Ela tem
            como objetivo aumentar a produtividade e o foco durante os estudos
            ou o trabalho.
          </p>
          <p>
            O funcionamento é simples: você divide o tempo em blocos de{" "}
            <strong>25 minutos de concentração total</strong>, chamados de
            “pomodoros”, seguidos por
            <strong> 5 minutos de pausa</strong>. Após completar quatro
            pomodoros, faz-se uma pausa maior, de cerca de 15 a 30 minutos.
          </p>
          <p>
            Durante cada pomodoro, a pessoa deve se dedicar exclusivamente a uma
            tarefa, evitando distrações. As pausas servem para descansar a mente
            e evitar a fadiga mental.
          </p>
          <p>
            Em resumo, a técnica Pomodoro ajuda a manter a disciplina, o foco e
            o equilíbrio entre produtividade e descanso, tornando o tempo de
            estudo ou trabalho mais eficiente.
          </p>
        </Generic>
      </Container>
    </MainTemplate>
  );
};

export default About;
