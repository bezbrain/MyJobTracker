import { useSelector } from "react-redux/es/hooks/useSelector";
import AddJob from "../StylesWrappers/AddJob/addJob";
import ButtonWrapper from "../StylesWrappers/General/button";
import InputWrapper from "../StylesWrappers/General/inputBox";
import Button from "../components/General/Button";
import InputBox from "../components/General/InputBox";
import SelectOption from "../components/General/SelectOption";
import { useDispatch } from "react-redux";

const AddJobs = () => {
  const { position, company, joblocation, status, jobType } = useSelector(
    (store: any) => store.addJobStore.inputs
  );

  // console.log(position);

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
          <Button button="Clear" />
          <Button button="Submit" />
        </ButtonWrapper>
      </InputWrapper>
    </AddJob>
  );
};

export default AddJobs;
