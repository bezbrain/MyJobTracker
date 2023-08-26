import AddJobAllJobsProfile from "../StylesWrappers/General/AddJobAllJobsProfile";
import InputWrapper from "../StylesWrappers/General/inputBox";
import InputBox from "../components/General/InputBox";
import ButtonWrapper from "../StylesWrappers/General/button";
import Button from "../components/General/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { ChangeEvent, useEffect, useState } from "react";
import { ProfileState } from "../model";
import { collectInputs } from "../features/profile/profileSlice";
import { getUserId, getUserSnapshotDB } from "../DBSnapShot";
import { DocumentData } from "firebase/firestore";
import Loader from "../components/General/Loader";

const Profile = () => {
  const [getProfile, setGetProfile] = useState<any>({});

  const { userProfile } = useSelector((store: RootState) => store.profileStore);

  // const { username, firstName, lastName, email, location } = userProfile;

  const dispatch = useDispatch<AppDispatch>();

  const localStorageId: string | null = getUserId(); //Get user id from local storage

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name as keyof ProfileState;
    let value = e.target.value;

    dispatch(collectInputs({ name, value }));
  };

  const handleSaveChanges = (e: React.FormEvent<Element>) => {
    //
  };

  useEffect(() => {
    getUserSnapshotDB(localStorageId, setGetProfile);
  }, []);

  if (Object.keys(getProfile).length === 0) {
    return <Loader loaderStyle="varyingCSSProfile" />;
  }

  return (
    <AddJobAllJobsProfile>
      <p>Profile</p>
      <InputWrapper>
        <InputBox
          jobName="Username"
          typeName="text"
          inputName="username"
          inputValue={getProfile ? getProfile.username : null}
          handleChange={handleChange}
          noEdit={true}
        />
        <InputBox
          jobName="First Name"
          typeName="text"
          inputName="firstName"
          // inputValue={firstName}
          inputValue={getProfile ? getProfile.firstName : null}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Last Name"
          typeName="text"
          inputName="lastName"
          // inputValue={lastName}
          inputValue={getProfile ? getProfile.lastName : null}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Email"
          typeName="text"
          inputName="email"
          // inputValue={email}
          inputValue={getProfile ? getProfile.email : null}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Location"
          typeName="text"
          inputName="location"
          // inputValue={location}
          inputValue={getProfile ? getProfile.location : null}
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
