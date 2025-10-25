import { MainTemplate } from "../../templates/MainTemplate";
import { Heading } from "../../components/Heading";

import styles from "./History.module.css";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { TrashIcon } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formateDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

const History = () => {
  const { state, dispatch } = useTaskContext();
  const checkTasks = state.tasks.length > 0;

  const sortedTasks = [...state.tasks].sort((a, b) => {
    return b.startDate - a.startDate;
  });

  const handleCleanHistory = () => {
    if (!confirm("Tem certeza?")) return;

    dispatch({ type: TaskActionTypes.RESET_TASK });
  };

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>Histórico</span>
          <span className={styles.buttonContainer}>
            {checkTasks && (
              <Button
                color='red'
                id='delete'
                label={<TrashIcon width={20} />}
                aria-label='Apagar histórico'
                title='Apagar histórico'
                onClick={handleCleanHistory}
              ></Button>
            )}
          </span>
        </Heading>
      </Container>

      <Container>
        {checkTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortedTasks.map(task => {
                  const taskTypes = {
                    workTime: "Foco",
                    shortBreakTime: "Descanso curto",
                    longBreakTime: "Descanso longo",
                  };

                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration} min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypes[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {!checkTasks && <p className={styles.noTasks}>⚠️ Sem tarefas</p>}
      </Container>
    </MainTemplate>
  );
};

export default History;
