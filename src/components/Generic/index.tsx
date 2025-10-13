import styles from "./styles.module.css";

type GenericProps = {
  children: React.ReactNode;
};

const Generic = ({ children }: GenericProps) => {
  return <div className={styles.generic}>{children}</div>;
};

export default Generic;
