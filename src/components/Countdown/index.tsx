import styles from "./Countdown.module.css";
import { useTaskContext } from "../../contexts/TaskContext";

export const Countdown = () => {
  const taskContext = useTaskContext();

  console.log(taskContext);

  return (
    <div className={styles.countdown}>
      <span>00:00</span>
    </div>
  );
};
