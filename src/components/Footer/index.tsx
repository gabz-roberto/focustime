import styles from "./Footer.module.css";
import RouterLink from "../RouterLink";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>Sobre o Pomodoro</RouterLink>
      <RouterLink href='/'>
        Focus<strong>Mind</strong> &copy; {new Date().getFullYear()}
      </RouterLink>
    </footer>
  );
};
