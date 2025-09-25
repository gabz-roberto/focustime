import styles from "./Input.module.css";

type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
} & React.ComponentProps<"input">;

export const Input = ({
  label,
  id,
  type,
  placeholder,
  ...rest
}: InputProps) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        {...rest}
        className={styles.input}
        placeholder={placeholder}
      />
    </>
  );
};
