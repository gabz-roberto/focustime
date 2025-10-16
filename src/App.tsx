import Home from "./pages/Home";

import "./styles/global.css";
import "./styles/theme.css";
import type { TaskStateModel } from "./models/TaskStateModel";
import { TaskContextProvider } from "./contexts/TaskContext";
import { useState } from "react";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "01:00",
  activeTask: null,
  currentCicle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

const App = () => {
  const [state, setState] = useState(initialState);

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
};

export { App };
