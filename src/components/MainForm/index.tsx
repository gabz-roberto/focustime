import { Input } from "../Input";
import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { useState } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { handleNextCycle } from "../../utils/handleNextCycle";

const MainForm = () => {
  const [taskName, setTaskName] = useState("");
  const { state, setState } = useTaskContext();

  const nextCycle = handleNextCycle(state.currentCicle);

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
      duration: 0,
      type: "workTime",
    };

    const secondsRemainingInMinutes = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCicle: nextCycle,
        secondsRemaining: secondsRemainingInMinutes,
        formattedSecondsRemaining: "00:00",
        tasks: [...prevState.tasks, newTask],
        config: {
          ...prevState.config,
        },
      };
    });
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
        />
      </div>
      <div className='formSection'>
        <p>
          Próximo intervalo: <strong>25</strong> min
        </p>
      </div>
      <div className='formSection'>
        <Cycles />
      </div>
      <div className='formSection'>
        <Button id='send' label={<PlayCircleIcon />} color='default' />
      </div>
    </form>
  );
};

export default MainForm;
