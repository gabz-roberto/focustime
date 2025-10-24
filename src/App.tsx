import "./styles/global.css";
import "./styles/theme.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";

import Home from "./pages/Home";
import MessagesContainer from "./components/MessagesContainer";

const App = () => {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
    </TaskContextProvider>
  );
};

export { App };
