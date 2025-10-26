import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";

import styles from "./Settings.module.css";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { SaveIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { toastfyAdapter } from "../../adapters/toastfyAdapter";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

const Settings = () => {
  const { state, dispatch } = useTaskContext();

  useEffect(() => {
    document.title = "Configurações | FocusMind";
  }, []);

  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  const handleSaveSettings = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toastfyAdapter.dismiss();

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      toastfyAdapter.error("Informe apenas números");
      return;
    }

    if (workTime <= 0 || shortBreakTime <= 0 || longBreakTime <= 0) {
      toastfyAdapter.error("Informe valores positivos");
      return;
    }

    if (workTime < 1 || workTime > 90) {
      toastfyAdapter.error("Informe valores entre 1 e 90 para FOCO");
      return;
    }

    if (shortBreakTime < 1 || shortBreakTime >= 50) {
      toastfyAdapter.error("Informe valores entre 1 e 15 para DESCANSO CURTO");
      return;
    }

    if (longBreakTime < 1 || longBreakTime >= 60) {
      toastfyAdapter.error("Informe valores entre 1 e 30 para DESCANSO LONGO");
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: { workTime, shortBreakTime, longBreakTime },
    });
    toastfyAdapter.success("Configurações salvas");
  };

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p className={styles.paragraph}>Altere as configurações de tempo.</p>
      </Container>
      <Container>
        <form action='' className='form' onSubmit={handleSaveSettings}>
          <div className={styles.rowSection}>
            <Input
              type='number'
              id='workTime'
              label='Foco'
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              min={1}
              max={90}
            />
          </div>
          <div className={styles.rowSection}>
            <Input
              type='number'
              id='shortBreakTime'
              label='Descanso curto'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              min={1}
              max={15}
            />
          </div>
          <div className={styles.rowSection}>
            <Input
              type='number'
              id='longBreakTime'
              label='Descanso longo'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              min={1}
              max={30}
            />
          </div>
          <div className={styles.rowSection}>
            <Button
              id='save'
              label={<SaveIcon />}
              color='default'
              aria-label='Salvar configurações'
              title='Salvar configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
};

export default Settings;
