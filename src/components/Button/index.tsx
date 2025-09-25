import styles from "./Button.module.css";

type ButtonProps = {
  id: string;
  label?: string;
} & React.ComponentProps<"button">;

export const Button = ({
  label,
  id,
  type,

  ...rest
}: ButtonProps) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <button type={type} id={id} {...rest} className={styles.Button}></button>
    </>
  );
};
