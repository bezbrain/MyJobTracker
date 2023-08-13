import { useSelector } from "react-redux/es/hooks/useSelector";
import AddJob from "../StylesWrappers/AddJob/addJob";
import ButtonWrapper from "../StylesWrappers/General/button";
import InputWrapper from "../StylesWrappers/General/inputBox";
import Button from "../components/General/Button";
import InputBox from "../components/General/InputBox";
import SelectOption from "../components/General/SelectOption";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";
import { clearInput, submitData } from "../features/addJob/addJobSlice";
import { toast } from "react-toastify";

const AddJobs = () => {
  const { inputs } = useSelector((store: RootState) => store.addJobStore);

  const { position, company, joblocation, status, jobType } = inputs;

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!position || !company || !joblocation || !status || !jobType) {
      toast.error("No field should be empty");
    } else {
      await dispatch(submitData(inputs));
    }
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(clearInput());
    toast.success("Field Cleared");
  };

  return (
    <AddJob>
      <p>Add Job</p>
      <InputWrapper>
        <InputBox
          jobName="Position"
          inputName="position"
          inputValue={position}
        />
        <InputBox jobName="Company" inputName="company" inputValue={company} />
        <InputBox
          jobName="Job Location"
          inputName="joblocation"
          inputValue={joblocation}
        />

        <SelectOption
          statusName="status"
          statusValue={status}
          selectName="Status"
          optionOne="Pending"
          optionTwo="Interview"
          optionThree="Declined"
        />
        <SelectOption
          statusName="jobType"
          statusValue={jobType}
          selectName="Job Type"
          optionOne="Full-time"
          optionTwo="Part-time"
          optionThree="Remote"
          optionFour="Internship"
        />

        <ButtonWrapper>
          <Button button="Clear" type="reset" handleSubmit={handleReset} />
          <Button button="Submit" handleSubmit={handleSubmit} type="submit" />
        </ButtonWrapper>
      </InputWrapper>
    </AddJob>
  );
};

export default AddJobs;
