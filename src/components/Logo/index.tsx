import { Hourglass } from "lucide-react";
import styles from "./Logo.module.css";
import RouterLink from "../RouterLink";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <RouterLink href='/' className={styles.logoLink}>
        <Hourglass size={60} />
        <span>
          Focus<strong>Mind</strong>
        </span>
      </RouterLink>
    </div>
  );
};
