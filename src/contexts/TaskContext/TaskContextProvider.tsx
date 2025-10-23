import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(event => {
    const secondsCounter = event.data;

    console.log(secondsCounter);

    if (secondsCounter <= 0) {
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNTER,
        payload: { secondsRemaining: secondsCounter },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log(state);

      console.log("Worker Finalizado");

      worker.terminate();
    }

    worker.postMessage(state);
  }, [state, worker]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
