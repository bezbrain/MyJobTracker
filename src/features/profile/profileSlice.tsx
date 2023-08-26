import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "../../model";
import { getUserSnapshotDB } from "../../DBSnapShot";

const initialState: ProfileState = {
  profileLoading: false,
  userProfile: {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    location: "",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    collectInputs: (
      state,
      { payload }: PayloadAction<{ name: keyof ProfileState; value: any }>
    ) => {
      // console.log(state);
      const { name, value } = payload;
      state.userProfile = { ...state.userProfile, [name]: value };
    },
  },
});

// console.log(profileSlice);

export const { collectInputs } = profileSlice.actions;

export default profileSlice.reducer;
