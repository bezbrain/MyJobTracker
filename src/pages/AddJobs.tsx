import AddJob from "../StylesWrappers/AddJob/addJob";
import ButtonWrapper from "../StylesWrappers/General/button";
import InputWrapper from "../StylesWrappers/General/inputBox";
import Button from "../components/General/Button";
import InputBox from "../components/General/InputBox";
import SelectOption from "../components/General/SelectOption";
import { useDispatch } from "react-redux";

const AddJobs = () => {
  return (
    <AddJob>
      <p>Add Job</p>
      <InputWrapper>
        <InputBox name="Position" />
        <InputBox name="Company" />
        <InputBox name="Job Location" />

        <SelectOption
          name="Status"
          optionOne="Pending"
          optionTwo="Interview"
          optionThree="Declined"
        />
        <SelectOption
          name="Job Type"
          optionOne="Full-time"
          optionTwo="Part-time"
          optionThree="Remote"
          optionFour="Internship"
        />

        <ButtonWrapper>
          <Button button="Clear" />
          <Button button="Submit" />
        </ButtonWrapper>
      </InputWrapper>
    </AddJob>
  );
};

export default AddJobs;
