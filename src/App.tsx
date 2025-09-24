import "./styles/global.css";
import "./styles/theme.css";

import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

const App = () => {
  return (
    <>
      <Heading>hello heading 1 <button><TimerIcon/></button></Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        tempore ad animi accusantium dicta ea cupiditate unde expedita illum
        repudiandae? Eius cupiditate maiores deleniti qui molestiae, animi
        accusantium voluptas explicabo.
      </p>
    </>
  );
};

export { App };
