import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import Generic from "../../components/Generic";
import { Heading } from "../../components/Heading";

import styles from "./About.module.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Sobre o Pomodoro | FocusMind";
  }, []);

  return (
    <MainTemplate>
      <Container>
        <Generic>
          <Heading>Sobre o Pomodoro</Heading>
          <section className={styles.aboutPomodoro} id='about'>
            <div className={styles.inner}>
              <div className={styles.heroLine}>
                <span
                  className={styles.hourglass}
                  role='img'
                  aria-label='Ampulheta'
                >
                  ⏳
                </span>
                <h2>🍅 Sobre o Pomodoro — FocusMind</h2>
              </div>

              <p className={styles.lead}>
                A <strong>Técnica Pomodoro</strong> foi criada por{" "}
                <strong>Francesco Cirillo</strong> nos anos 1980. Em poucas
                regras, ela ajuda a transformar tempo em foco real:{" "}
                <strong>25 minutos</strong> de trabalho concentrado seguidos de{" "}
                <strong>5 minutos</strong> de pausa — e uma pausa maior após 4
                ciclos.
              </p>

              <div className={styles.card}>
                <h3>🚀 Como funciona</h3>
                <ul className={styles.howList}>
                  <li>
                    <div className={styles.badge}>1</div>
                    <div>
                      Concentre-se por <strong>25 minutos</strong> — este é o
                      seu <em>Pomodoro</em>.
                      <small>
                        Dica: escolha uma tarefa específica e desligue
                        distrações.
                      </small>
                    </div>
                  </li>
                  <li>
                    <div className={styles.badge}>2</div>
                    <div>
                      Faça uma pausa curta de <strong>5 minutos</strong> 🧘.
                      <small>Respire, levante-se, hidrate-se.</small>
                    </div>
                  </li>
                  <li>
                    <div className={styles.badge}>4</div>
                    <div>
                      Após 4 Pomodoros, tire uma pausa maior (15–30 minutos) ☕.
                      <small>Recarregue de verdade e relaxe.</small>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>📚 Dicas para estudar com Pomodoro</h3>
                <ul className={styles.tipsList}>
                  <li>
                    📌 Divida o conteúdo em blocos (um tópico por Pomodoro).
                  </li>
                  <li>📝 Revise anotações nas pausas curtas.</li>
                  <li>🎧 Use músicas instrumentais ou ruído branco.</li>
                  <li>🔄 Alterne matérias para manter a motivação.</li>
                  <li>⏱️ Adapte o tempo ao seu ritmo (ex: 50/10).</li>
                </ul>
              </div>

              <div>
                <h3>🌱 Benefícios rápidos</h3>
                <div className={styles.benefitsGrid}>
                  <div className={styles.benefit}>
                    ✅{" "}
                    <div>
                      <strong>Mais foco</strong>
                      <p>Trabalhe por blocos produtivos.</p>
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    ✅{" "}
                    <div>
                      <strong>Menos procrastinação</strong>
                      <p>Transforme tarefas em metas curtas.</p>
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    ✅{" "}
                    <div>
                      <strong>Equilíbrio</strong>
                      <p>Pausas frequentes reduzem a fadiga.</p>
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    ✅{" "}
                    <div>
                      <strong>Autoconhecimento</strong>
                      <p>Descubra quanto tempo leva cada tarefa.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className={styles.footer}>
                Em resumo: o Pomodoro é simples, mas poderoso — transforme
                minutos em progresso real 🌟
              </p>
            </div>
          </section>
        </Generic>
      </Container>
    </MainTemplate>
  );
};

export default About;
