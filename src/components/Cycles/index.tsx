import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { handleNextCycle } from "../../utils/handleNextCycle";
import { handleNextCycleType } from "../../utils/handleNextCycleType";
import styles from "./Cycles.module.css";

export const Cycles = () => {
  const { state } = useTaskContext();

  const cycle = Array.from({ length: state.currentCicle });

  const cycleDescription = {
    workTime: "foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo",
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>
        {/*  */}
        {cycle.map((_, index) => {
          const nextCycle = handleNextCycle(index);
          const cycleType = handleNextCycleType(nextCycle);
          return (
            <span
              key={`${cycleType}_${index}`}
              className={`${styles.dot} ${styles[cycleType]}`}
              aria-label='Ciclo'
              title={`Indicador de ciclo de ${cycleDescription[cycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
