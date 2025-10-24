import "./styles/global.css";
import "./styles/theme.css";

import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import MessagesContainer from "./components/MessagesContainer";
import MainRouter from "./Routers/MainRouter";

const App = () => {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
};

export { App };
