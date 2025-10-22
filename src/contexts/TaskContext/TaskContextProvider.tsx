import { useEffect, useReducer, useState } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, setState] = useState(initialTaskState);

  type ActionType = {
    type: string;
    payload?: number;
  };

  const [myState, dispatch] = useReducer(
    (state, action: ActionType) => {
      console.log(state, action);

      switch (action.type) {
        case "INCREMENT": {
          if (!action.payload) return state;
          return {
            ...state,
            secondsRemaining: state.secondsRemaining + action.payload,
          };
        }
        case "DECREMENT": {
          if (!action.payload) return state;
          return {
            ...state,
            secondsRemaining: state.secondsRemaining - action.payload,
          };
        }
        case "RESET": {
          return {
            secondsRemaining: 0,
          };
        }
      }

      return state;
    },
    {
      secondsRemaining: 0,
    },
  );

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {/* {children} */}
      <h1>O número é: {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
        - 5
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        + 10
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </TaskContext.Provider>
  );
};
