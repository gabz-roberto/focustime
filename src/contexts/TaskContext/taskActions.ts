// useReducer <- hook do React que recebe um reducer e u estado inicial
// reducer <- função que recbe um estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a ação disparada , geralmente é um objeto com type e (opcionalmente) um payload
// type <- o tipo da ação, geralmente uma string (podendo ser um enum, constante, etc)
// payload <- os dados extras enviados junto a action, se necessário para atualizar o estado

import type { TaskModel } from "../../models/TaskModel";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  STOP_TASK = "STOP_TASK",
  RESET_TASK = "RESET_TASK",
  COUNTER = "COUNTER",
  COMPLETE_TASK = "COMPLETE_TASK",
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.STOP_TASK;
    }
  | {
      type: TaskActionTypes.RESET_TASK;
    }
  | {
      type: TaskActionTypes.COUNTER;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    };
