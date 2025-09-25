import styles from "./Button.module.css";

type ButtonProps = {
  id: string;
  label: React.ReactNode;
  color?: "default" | "red";
} & React.ComponentProps<"button">;

export const Button = ({
  label,
  id,
  color = "default",
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        id={id}
        {...props}
        className={`${styles.button} ${styles[color]}`}
      >
        {label}
      </button>
    </>
  );
};
