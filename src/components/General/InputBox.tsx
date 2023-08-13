import { ChangeEvent } from "react";

interface Props {
  jobName: string;
  inputName: string;
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<Props> = ({
  jobName,
  inputName,
  inputValue,
  handleChange,
}) => {
  return (
    <div>
      <p>{jobName}</p>
      <input
        type="text"
        name={inputName}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputBox;
