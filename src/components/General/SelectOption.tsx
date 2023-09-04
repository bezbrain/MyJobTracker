import { useSelector } from "react-redux";
import SelectWrapper from "../../StylesWrappers/General/selectOption";
import { RootState } from "../../store";
import { SelectOptionProps } from "../../model";

const SelectOption: React.FC<SelectOptionProps> = ({
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
        optionFour === "Remote"
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
