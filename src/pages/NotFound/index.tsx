import { Container } from "../../components/Container";
import Generic from "../../components/Generic";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import styles from "./NotFound.module.css";
import RouterLink from "../../components/RouterLink";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 — Página não encontrada";
  }, []);

  return (
    <MainTemplate>
      <Container>
        <Generic>
          <div className={styles.center}>
            <Heading>🍅 O Pomodoro se perdeu no tempo!</Heading>
            <p>
              Essa página parece ter tirado uma pausa maior que o normal... ⏳
            </p>
            <p>Volte ao foco e escolha um novo destino:</p>

            <ul>
              <li>
                🏠 <RouterLink href='/'>Início</RouterLink>
              </li>
              <li>
                ⚙️ <RouterLink href='/settings/'>Configurações</RouterLink>
              </li>
            </ul>
            <h2>😅 404 — Página não encontrada</h2>
          </div>
        </Generic>
      </Container>
    </MainTemplate>
  );
};

export default NotFound;
