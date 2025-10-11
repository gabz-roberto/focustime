import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./Menu.module.css";
import "../../styles/theme.css";
import { useState } from "react";

type AvailableThemes = "light" | "dark";

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setTheme(prevTheme => {
      const next = prevTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  };

  return (
    <nav className={styles.menu}>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Início'
        title='Início'
      >
        <HouseIcon size={30} />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Histórico'
        title='Histórico'
      >
        <HistoryIcon size={30} />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Opções'
        title='Opções'
      >
        <SettingsIcon size={30} />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Alterar tema'
        title='Alterar tema'
        onClick={handleThemeChange}
      >
        <SunIcon size={30} />
      </a>
    </nav>
  );
};
