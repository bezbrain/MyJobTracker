import { useSelector } from "react-redux";
import SelectWrapper from "../../StylesWrappers/General/selectOption";
import { RootState } from "../../store";

interface Props {
  statusName: string;
  statusValue: string;
  selectName: string;
  optionOne: string;
  optionTwo: string;
  optionThree: string;
  optionFour?: string | null;
  optionFive?: string | null;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectOption: React.FC<Props> = ({
  statusName,
  statusValue,
  selectName,
  optionOne,
  optionTwo,
  optionThree,
  optionFour,
  optionFive,
  handleSelect,
}) => {
  const { isRemove } = useSelector((store: RootState) => store.addJobStore);

  return (
    <SelectWrapper>
      <p>{selectName}</p>
      <select name={statusName} value={statusValue} onChange={handleSelect}>
        <option value=""></option>
        <option value={optionOne}>{optionOne}</option>
        <option value={optionTwo}>{optionTwo}</option>
        <option value={optionThree}>{optionThree}</option>
        {optionFour === "Internship" ||
        optionFour === "Pending" ||
        optionFour === "Remote" ||
        optionFour === "z-a"
          ? isRemove && <option value={optionFour}>{optionFour}</option>
          : ""}
        {optionFive === "Internship"
          ? isRemove && <option value={optionFive}>{optionFive}</option>
          : ""}
      </select>
    </SelectWrapper>
  );
};

export default SelectOption;
