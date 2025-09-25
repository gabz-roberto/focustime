import styles from "./Cycles.module.css";

export const Cycles = () => {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>
        <span className={`${styles.dot} ${styles.workTime}`}></span>
        <span className={`${styles.dot} ${styles.shortPauseTime}`}></span>
        <span className={`${styles.dot} ${styles.workTime}`}></span>
        <span className={`${styles.dot} ${styles.shortPauseTime}`}></span>
        <span className={`${styles.dot} ${styles.longPauseTime}`}></span>
      </div>
    </div>
  );
};
