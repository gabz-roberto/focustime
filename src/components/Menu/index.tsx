import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./Menu.module.css";
import "../../styles/theme.css";
import { useEffect, useState } from "react";
import RouterLink from "../RouterLink";

type AvailableThemes = "light" | "dark";

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const themeStorage =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return themeStorage;
  });

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();

    setTheme(prevTheme => {
      const next = prevTheme === "dark" ? "light" : "dark";

      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        href='/'
        className={styles.menuLink}
        aria-label='Início'
        title='Início'
      >
        <HouseIcon size={30} />
      </RouterLink>
      <RouterLink
        href='#'
        className={styles.menuLink}
        aria-label='Histórico'
        title='Histórico'
      >
        <HistoryIcon size={30} />
      </RouterLink>
      <RouterLink
        href='#'
        className={styles.menuLink}
        aria-label='Opções'
        title='Opções'
      >
        <SettingsIcon size={30} />
      </RouterLink>
      <RouterLink
        href='#'
        className={styles.menuLink}
        aria-label='Alterar tema'
        title='Alterar tema'
        onClick={handleThemeChange}
      >
        {theme === "dark" ? <SunIcon size={30} /> : <MoonIcon size={30} />}
      </RouterLink>
    </nav>
  );
};
