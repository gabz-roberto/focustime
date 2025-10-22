import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { handleNextCycle } from "../../utils/handleNextCycle";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export const taskReducer = (
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel => {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = handleNextCycle(state.currentCicle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCicle: nextCycle,
        secondsRemaining: secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.STOP_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask?.id === task.id) {
            return { ...task, stoppedDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.RESET_TASK: {
      return state;
    }
  }

  return state;
};
