import { useSelector } from "react-redux/es/hooks/useSelector";
import InputBox from "../General/InputBox";
import { RootState } from "../../store";
import InputWrapper from "../../StylesWrappers/General/inputBox";
import SelectOption from "../General/SelectOption";
import Button from "../General/Button";
import ButtonWrapper from "../../StylesWrappers/General/button";

const InputSection = () => {
  const { search, status, type, sort } = useSelector(
    (store: RootState) => store.allJobsStore.allJobsInputs
  );

  //   Handle input change
  const handleChange = (e: React.FormEvent<Element>) => {
    // let name = e.target.name;
    // let value = e.target.value;
  };

  //   Handle select change
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // let name = e.target.name;
    // let value = e.target.value;
  };

  const handleClear = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <InputWrapper>
      <InputBox
        jobName="Search"
        inputName="search"
        inputValue={search}
        handleChange={handleChange}
      />
      <SelectOption
        statusName="status"
        statusValue={status}
        selectName="Status"
        optionOne="All"
        optionTwo="Interview"
        optionThree="Declined"
        optionFour="Pending"
        handleSelect={handleSelect}
      />
      <SelectOption
        statusName="type"
        statusValue={type}
        selectName="Type"
        optionOne="All"
        optionTwo="Full-time"
        optionThree="Part-time"
        optionFour="Remote"
        optionFive="Internship"
        handleSelect={handleSelect}
      />
      <SelectOption
        statusName="sort"
        statusValue={sort}
        selectName="Sort"
        optionOne="Latest"
        optionTwo="Oldest"
        optionThree="a-z"
        optionFour="z-a"
        handleSelect={handleSelect}
      />
      <ButtonWrapper>
        <Button
          button="Clear Filter"
          handleSubmit={handleClear}
          type="submit"
          allJobsBtn="add-allJobs-btn"
        />
      </ButtonWrapper>
    </InputWrapper>
  );
};

export default InputSection;
