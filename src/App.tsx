import "./styles/global.css";
import "./styles/theme.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";

import Home from "./pages/Home";

const App = () => {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
};

export { App };
