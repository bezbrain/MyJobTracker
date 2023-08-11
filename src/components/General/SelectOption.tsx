import { useSelector } from "react-redux";
import SelectWrapper from "../../StylesWrappers/General/selectOption";

interface Props {
  name: string;
  optionOne: string;
  optionTwo: string;
  optionThree: string;
  optionFour?: string | null;
}

const SelectOption: React.FC<Props> = ({
  name,
  optionOne,
  optionTwo,
  optionThree,
  optionFour,
}) => {
  const { isRemove } = useSelector((store: any) => store.addJobStore);

  return (
    <SelectWrapper>
      <p>{name}</p>
      <select>
        <option value="value">{optionOne}</option>
        <option value="value">{optionTwo}</option>
        <option value="value">{optionThree}</option>
        {optionFour === "Internship"
          ? isRemove && <option value="value">{optionFour}</option>
          : ""}
      </select>
    </SelectWrapper>
  );
};

export default SelectOption;
