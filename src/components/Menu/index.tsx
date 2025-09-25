import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./Menu.module.css";
import "../../styles/theme.css";

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <a href='#' className={styles.menuLink}>
        <HouseIcon size={30} />
      </a>
      <a href='#' className={styles.menuLink}>
        <HistoryIcon size={30} />
      </a>
      <a href='#' className={styles.menuLink}>
        <SettingsIcon size={30} />
      </a>
      <a href='#' className={styles.menuLink}>
        <SunIcon size={30} />
      </a>
    </nav>
  );
};
