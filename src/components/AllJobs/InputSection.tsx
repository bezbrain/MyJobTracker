import { useSelector } from "react-redux/es/hooks/useSelector";
import InputBox from "../General/InputBox";
import { AppDispatch, RootState } from "../../store";
import InputWrapper from "../../StylesWrappers/General/inputBox";
import SelectOption from "../General/SelectOption";
import { ChangeEvent } from "react";
import Button from "../General/Button";
import ButtonWrapper from "../../StylesWrappers/General/button";
import { useDispatch } from "react-redux";
import { collectInputs } from "../../features/allJobs/allJobsSlice";

const InputSection = () => {
  const { search, status, type, sort } = useSelector(
    (store: RootState) => store.allJobsStore.allJobsInputs
  );

  const dispatch = useDispatch<AppDispatch>();

  //   Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(collectInputs({ name, value }));
  };

  //   Handle select change
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let name = e.target.name;
    let value = e.target.value;
  };

  const handleClear = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <InputWrapper>
      <InputBox
        jobName="Search"
        typeName="text"
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
