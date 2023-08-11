import { useDispatch, useSelector } from "react-redux";
import { collectInput } from "../../features/addJob/addJobSlice";

interface Props {
  jobName: string;
  inputName: string;
  inputValue: string;
}

const InputBox: React.FC<Props> = ({ jobName, inputName, inputValue }) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    dispatch(collectInput({ name, value }));
  };

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
