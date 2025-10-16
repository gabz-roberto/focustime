import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import styles from "./Countdown.module.css";

export const Countdown = () => {
  const { state } = useTaskContext();

  return (
    <div className={styles.countdown}>
      <span>{state.formattedSecondsRemaining}</span>
    </div>
  );
};
