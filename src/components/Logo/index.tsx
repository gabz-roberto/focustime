import { Hourglass } from "lucide-react";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href='#' className={styles.logoLink}>
        <Hourglass size={60}/>
        <span>
          Focus<strong>Mind</strong>
        </span>
      </a>
    </div>
  );
};
