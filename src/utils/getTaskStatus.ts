import type { TaskModel } from "../models/TaskModel";

export const getTaskStatus = (
  task: TaskModel,
  activeTask: TaskModel | null,
) => {
  if (task.completeDate) return "Completa";
  if (task.stoppedDate) return "Interrompida";
  if (task.id === activeTask?.id) return "Em andamento";

  return "Abandonada";
};
