import { ChangeEvent, useEffect, useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ButtonWrapper from "../StylesWrappers/General/button";
import InputWrapper from "../StylesWrappers/General/inputBox";
import Button from "../components/General/Button";
import InputBox from "../components/General/InputBox";
import SelectOption from "../components/General/SelectOption";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";
import {
  clearInput,
  submitData,
  updateData,
} from "../features/addJob/addJobSlice";
import { toast } from "react-toastify";
import AddJobAllJobsProfile from "../StylesWrappers/General/AddJobAllJobsProfile";
import { collectInput } from "../features/addJob/addJobSlice";
import { changeTextContent } from "../features/allJobs/editSlice";

const AddJobs = () => {
  const { inputs } = useSelector((store: RootState) => store.addJobStore);
  const { btnContent } = useSelector((store: RootState) => store.editJobStore);

  const { position, company, joblocation, status, jobType } = inputs;

  const dispatch = useDispatch<AppDispatch>();

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    dispatch(collectInput({ name, value }));
  };

  // Handle Select change
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    dispatch(collectInput({ name, value }));
  };

  // Submit all inputs
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!position || !company || !joblocation || !status || !jobType) {
      toast.error("No field should be empty");
    } else {
      if (btnContent === "Submit") {
        await dispatch(submitData(inputs));
      } else {
        dispatch(updateData());
        dispatch(changeTextContent());
      }
    }
  };

  // Reset initial inputs
  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(clearInput());
    toast.success("Field Cleared");
  };

  return (
    <AddJobAllJobsProfile>
      <p>Add Job</p>
      <InputWrapper>
        <InputBox
          jobName="Position"
          inputName="position"
          inputValue={position}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Company"
          inputName="company"
          inputValue={company}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Job Location"
          inputName="joblocation"
          inputValue={joblocation}
          handleChange={handleChange}
        />

        <SelectOption
          statusName="status"
          statusValue={status}
          selectName="Status"
          optionOne="Pending"
          optionTwo="Interview"
          optionThree="Declined"
          handleSelect={handleSelect}
        />
        <SelectOption
          statusName="jobType"
          statusValue={jobType}
          selectName="Job Type"
          optionOne="Full-time"
          optionTwo="Part-time"
          optionThree="Remote"
          optionFour="Internship"
          handleSelect={handleSelect}
        />

        <ButtonWrapper>
          <Button button="Clear" type="reset" handleSubmit={handleReset} />
          <Button button="Submit" handleSubmit={handleSubmit} type="submit" />
        </ButtonWrapper>
      </InputWrapper>
    </AddJobAllJobsProfile>
  );
};

export default AddJobs;
