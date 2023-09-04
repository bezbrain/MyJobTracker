import { ChangeEvent } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import InputBox from "../General/InputBox";
import { AppDispatch, RootState } from "../../store";
import InputWrapper from "../../StylesWrappers/General/inputBox";
import SelectOption from "../General/SelectOption";
import Button from "../General/Button";
import ButtonWrapper from "../../StylesWrappers/General/button";
import { useDispatch } from "react-redux";
import { collectInputs, clearInputs } from "../../features/allJobs/allJobsSlice";

const InputSection = () => {
  const { search, status, type } = useSelector(
    (store: RootState) => store.allJobsStore.allJobsInputs
  );

  const dispatch = useDispatch<AppDispatch>();

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(collectInputs({ name, value }));
  };

  // Handle select change
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(collectInputs({ name, value }));
  };


  const handleClear = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(clearInputs())
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
      <ButtonWrapper>
        <Button
          button="Clear"
          handleSubmit={handleClear}
          type="submit"
          allJobsBtn="add-search-btn"
        />
      </ButtonWrapper>
    </InputWrapper>
  );
};

export default InputSection;
