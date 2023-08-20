import { ChangeEvent } from "react";

interface Props {
  jobName: string;
  typeName: string;
  inputName: string;
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<Props> = ({
  jobName,
  typeName,
  inputName,
  inputValue,
  handleChange,
}) => {
  return (
    <div>
      <p>{jobName}</p>
      <input
        type={typeName}
        name={inputName}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputBox;
