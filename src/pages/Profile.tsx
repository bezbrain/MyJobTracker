import AddJobAllJobsProfile from "../StylesWrappers/General/AddJobAllJobsProfile";
import InputWrapper from "../StylesWrappers/General/inputBox";
import InputBox from "../components/General/InputBox";
import ButtonWrapper from "../StylesWrappers/General/button";
import Button from "../components/General/Button";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Profile = () => {
  const { name, lastName, email, location } = useSelector(
    (store: RootState) => store.profileStore
  );

  const handleChange = () => {
    //
  };

  const handleSaveChanges = () => {
    //
  };

  return (
    <AddJobAllJobsProfile>
      <p>Profile</p>
      <InputWrapper>
        <InputBox
          jobName="Name"
          inputName="name"
          inputValue={name}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Last Name"
          inputName="lastname"
          inputValue={lastName}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Email"
          inputName="email"
          inputValue={email}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Location"
          inputName="location"
          inputValue={location}
          handleChange={handleChange}
        />
        <ButtonWrapper>
          <Button
            button="Save Changes"
            handleSubmit={handleSaveChanges}
            type="submit"
            allJobsBtn="add-profile-btn"
          />
        </ButtonWrapper>
      </InputWrapper>
    </AddJobAllJobsProfile>
  );
};

export default Profile;
