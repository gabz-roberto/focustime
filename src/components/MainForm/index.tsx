import { Input } from "../Input";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { useState } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { handleNextCycle } from "../../utils/handleNextCycle";
import { handleNextCycleType } from "../../utils/handleNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { toastfyAdapter } from "../../adapters/toastfyAdapter";

const MainForm = () => {
  const [taskName, setTaskName] = useState("");
  const { state, dispatch } = useTaskContext();

  const nextCycle = handleNextCycle(state.currentCicle);
  const nextCycleType = handleNextCycleType(nextCycle);

  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || "";

  const tipsActiveTask = {
    workTime: (
      <span>
        Foco de <strong>{state.config.workTime}</strong> minutos
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanso de <strong>{state.config.shortBreakTime}</strong> minutos
      </span>
    ),
    longBreakTime: <span>Descanso longo.</span>,
  };

  const tipsNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <strong>{state.config.workTime}</strong> minutos
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso será de <strong>{state.config.shortBreakTime}</strong>{" "}
        minutos
      </span>
    ),
    longBreakTime: <span>Próximo descanso será longo.</span>,
  };

  const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toastfyAdapter.dismiss();

    const formattedTaskName = taskName.trim();

    if (!formattedTaskName) {
      toastfyAdapter.warning("O nome da tarefa não pode ser vazio.");
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

    toastfyAdapter.success("Tarefa iniciada.");
  };

  const handleStopTask = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    toastfyAdapter.dismiss();

    dispatch({ type: TaskActionTypes.STOP_TASK });
    toastfyAdapter.error("Tarefa interrompida.");
  };

  return (
    <form action='' id='form' onSubmit={handleCreateNewTask}>
      <div className='formSection'>
        <Input
          id='task'
          label='Tarefa'
          type='text'
          placeholder='Digite a tarefa...'
          onChange={e => setTaskName(e.target.value)}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>
      <div className='formSection'>
        {state.activeTask && tipsActiveTask[state.activeTask.type]}
        {!state.activeTask && tipsNoActiveTask[nextCycleType]}
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
