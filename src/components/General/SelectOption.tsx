import { useDispatch, useSelector } from "react-redux";
import SelectWrapper from "../../StylesWrappers/General/selectOption";
import { collectInput } from "../../features/addJob/addJobSlice";

interface Props {
  statusName: string;
  statusValue: string;
  selectName: string;
  optionOne: string;
  optionTwo: string;
  optionThree: string;
  optionFour?: string | null;
}

const SelectOption: React.FC<Props> = ({
  statusName,
  statusValue,
  selectName,
  optionOne,
  optionTwo,
  optionThree,
  optionFour,
}) => {
  const { isRemove } = useSelector((store: any) => store.addJobStore);

  const dispatch = useDispatch();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    dispatch(collectInput({ name, value }));
  };

  return (
    <SelectWrapper>
      <p>{selectName}</p>
      <select name={statusName} value={statusValue} onChange={handleSelect}>
        {/* <option value=""></option> */}
        <option value={optionOne}>{optionOne}</option>
        <option value={optionTwo}>{optionTwo}</option>
        <option value={optionThree}>{optionThree}</option>
        {optionFour === "Internship"
          ? isRemove && <option value={optionFour}>{optionFour}</option>
          : ""}
      </select>
    </SelectWrapper>
  );
};

export default SelectOption;
