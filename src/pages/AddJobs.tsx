import AddJob from "../StylesWrappers/AddJob/addJob";
import ButtonWrapper from "../StylesWrappers/General/button";
import InputWrapper from "../StylesWrappers/General/inputBox";
import Button from "../components/General/Button";
import InputBox from "../components/General/InputBox";
import SelectOption from "../components/General/SelectOption";

const AddJobs = () => {
  return (
    <AddJob>
      <p>Add Job</p>
      <InputWrapper>
        <InputBox />
        <InputBox />
        <InputBox />

        <SelectOption />
        <SelectOption />

        <ButtonWrapper>
          <Button />
          <Button />
        </ButtonWrapper>
      </InputWrapper>
    </AddJob>
  );
};

export default AddJobs;
