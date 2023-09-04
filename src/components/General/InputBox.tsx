import { InputProps } from "../../model";

const InputBox: React.FC<InputProps> = ({
  jobName,
  typeName,
  inputName,
  inputValue,
  handleChange,
  noEdit,
}) => {
  return (
    <div>
      <p>{jobName}</p>
      <input
        type={typeName}
        name={inputName}
        value={inputValue}
        onChange={handleChange}
        readOnly={noEdit} // to handle username being non-editable
        disabled={noEdit} // to remove focus from the username input
      />
    </div>
  );
};

export default InputBox;
