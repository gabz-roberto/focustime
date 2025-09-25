import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href='#'>Sobre o Pomodoro</a>
      <a href='#'>
        Focus<strong>Mind</strong> &copy; {new Date().getFullYear()}
      </a>
    </footer>
  );
};
