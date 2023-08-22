import { InputProps } from "../../model";

const InputBox: React.FC<InputProps> = ({
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
