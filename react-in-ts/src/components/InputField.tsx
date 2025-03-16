import { Dispatch, FormEvent, SetStateAction } from "react";

type InputType = string | number;

const InputField = <T extends InputType>({
  label,
  value,
  onChange,
}: {
  label: string;
  value: T;
  onChange: Dispatch<SetStateAction<T>>;
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>{label}</label>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => onChange(e.target.value as T)}
      />
      <button type="submit">Register</button>
    </form>
  );
};
export default InputField;
