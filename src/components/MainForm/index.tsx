import { Input } from "../Input";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { useState } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { handleNextCycle } from "../../utils/handleNextCycle";
import { handleNextCycleType } from "../../utils/handleNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

const MainForm = () => {
  const [taskName, setTaskName] = useState("");
  const { state, dispatch } = useTaskContext();

  const nextCycle = handleNextCycle(state.currentCicle);
  const nextCycleType = handleNextCycleType(nextCycle);

  const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formattedTaskName = taskName.trim();

    if (!formattedTaskName) {
      alert("O nome da tarefa não pode ser vazio.");
      setTaskName("");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: formattedTaskName,
      startDate: Date.now(),
      completeDate: null,
      stoppedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  };

  const handleStopTask = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    dispatch({ type: TaskActionTypes.STOP_TASK });
  };

  return (
    <form action='' id='form' onSubmit={handleCreateNewTask}>
      <div className='formSection'>
        <Input
          id='task'
          label='Tarefa'
          type='text'
          placeholder='Digite a tarefa...'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          disabled={!!state.activeTask}
        />
      </div>
      <div className='formSection'>
        <p>
          Próximo intervalo: <strong>25</strong> min
        </p>
      </div>

      {state.currentCicle > 0 && (
        <div className='formSection'>
          <Cycles />
        </div>
      )}

      <div className='formSection'>
        {!state.activeTask && (
          <Button
            id='send'
            type='submit'
            label={<PlayCircleIcon />}
            color='default'
            title='Iniciar nova tarefa'
            aria-label='Iniciar nova tarefa'
          />
        )}
        {!!state.activeTask && (
          <Button
            id='stop'
            label={<StopCircleIcon />}
            color='red'
            title='Parar tarefa atual'
            aria-label='Parar tarefa atual'
            type='button'
            onClick={handleStopTask}
          />
        )}
      </div>
    </form>
  );
};

export default MainForm;
