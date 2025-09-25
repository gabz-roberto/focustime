type InputProps = {
  id: string;
  label: React.ReactNode;
} & React.ComponentProps<"input">;

export const Input = ({ label, id, type }: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </>
  );
};
