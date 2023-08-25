import AddJobAllJobsProfile from "../StylesWrappers/General/AddJobAllJobsProfile";
import InputWrapper from "../StylesWrappers/General/inputBox";
import InputBox from "../components/General/InputBox";
import ButtonWrapper from "../StylesWrappers/General/button";
import Button from "../components/General/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { ChangeEvent, useEffect } from "react";
import { ProfileState } from "../model";
import { collectInputs } from "../features/profile/profileSlice";
import { getUserSnapshot } from "../DBSnapShot";

const Profile = () => {
  const { userProfile } = useSelector((store: RootState) => store.profileStore);

  const { username, firstName, lastName, email, location } = userProfile;

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name as keyof ProfileState;
    let value = e.target.value;

    dispatch(collectInputs({ name, value }));
  };

  const handleSaveChanges = (e: React.FormEvent<Element>) => {
    //
  };

  useEffect(() => {
    // getUserSnapshot()
    // console.log(getUserSnapshot());
  }, []);

  return (
    <AddJobAllJobsProfile>
      <p>Profile</p>
      <InputWrapper>
        <InputBox
          jobName="Username"
          typeName="text"
          inputName="username"
          inputValue={username}
          handleChange={handleChange}
          noEdit={true}
        />
        <InputBox
          jobName="First Name"
          typeName="text"
          inputName="firstName"
          inputValue={firstName}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Last Name"
          typeName="text"
          inputName="lastName"
          inputValue={lastName}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Email"
          typeName="text"
          inputName="email"
          inputValue={email}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Location"
          typeName="text"
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
