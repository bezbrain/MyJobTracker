import SelectWrapper from "../../StylesWrappers/General/selectOption";

const SelectOption = () => {
  return (
    <SelectWrapper>
      <p>Option Name</p>
      <select>
        <option value="value">Type</option>
      </select>
    </SelectWrapper>
  );
};

export default SelectOption;
