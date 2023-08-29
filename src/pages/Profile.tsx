import AddJobAllJobsProfile from "../StylesWrappers/General/AddJobAllJobsProfile";
import InputWrapper from "../StylesWrappers/General/inputBox";
import InputBox from "../components/General/InputBox";
import ButtonWrapper from "../StylesWrappers/General/button";
import Button from "../components/General/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { ChangeEvent, useEffect, useState } from "react";
import { ProfileState } from "../model";
import {
  collectInputs,
  getFSData,
  updateProfile,
} from "../features/profile/profileSlice";
import { getUserId, getUserSnapshotDB } from "../DBSnapShot";
import { DocumentData } from "firebase/firestore";
import Loader from "../components/General/Loader";

const Profile = () => {
  const [getProfile, setGetProfile] = useState<any>({});

  const { userProfile } = useSelector((store: RootState) => store.profileStore);

  const { username, firstName, lastName, email, location } = userProfile;

  // const [user, setUser] = useState({
  //   username,
  //   firstName,
  //   lastName,
  //   email,
  //   location,
  // });

  const dispatch = useDispatch<AppDispatch>();

  const localStorageId: string | null = getUserId(); //Get user id from local storage

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name as keyof ProfileState;
    let value = e.target.value;

    dispatch(collectInputs({ name, value }));
  };

  // Function to handle click of update profile button
  const handleSaveChanges = (e: React.FormEvent<Element>) => {
    e.preventDefault();
    const fireStoreId = getProfile.id;

    dispatch(updateProfile({ firstName, lastName, location, fireStoreId }));
  };

  // Track data from database
  useEffect(() => {
    getUserSnapshotDB(localStorageId, setGetProfile);
    const fireStoreId = getProfile.id;
    // using this to make sure that id is successfully available before dispatching
    if (fireStoreId) {
      dispatch(getFSData({ id: fireStoreId, getProfile }));
    }
  }, [localStorageId, getProfile.id]);

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
          typeName="email"
          inputName="email"
          inputValue={email}
          handleChange={handleChange}
          noEdit={true}
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
