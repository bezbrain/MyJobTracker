import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "../../model";
import { getUserSnapshotDB } from "../../DBSnapShot";
import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
} from "firebase/firestore";
import {
  singleDoc,
  userInfoColRef,
  getSingleDoc,
  updateInfo,
  db,
} from "../../firebaseStore";
import { toast } from "react-toastify";

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

// Function to update data in the firestore
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (userProfile: any, thunkAPI) => {
    try {
      console.log(userProfile);
      const docRef: DocumentReference = singleDoc(
        userInfoColRef,
        userProfile.fireStoreId
      );

      await updateInfo(docRef, {
        ...userProfile,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

// Function to get each user data from the firestore
export const getFSData = createAsyncThunk(
  "data/getdata",
  async (payload: any) => {
    try {
      const { id } = payload;
      const singleRef = singleDoc(userInfoColRef, id);
      const resp = await getSingleDoc(singleRef);
      const data = resp.data();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    collectInputs: (
      state,
      { payload }: PayloadAction<{ name: keyof ProfileState; value: any }>
    ) => {
      const { name, value } = payload;
      state.userProfile = { ...state.userProfile, [name]: value };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        console.log(state);
      })
      .addCase(updateProfile.fulfilled, (state) => {
        console.log(state);
        toast.success("Profile updated");
      })
      .addCase(updateProfile.rejected, (state) => {
        console.log(state);
      })

      .addCase(getFSData.pending, (state) => {
        // console.log(state);
      })
      .addCase(getFSData.fulfilled, (state, { payload }: any) => {
        // console.log(payload);
        state.userProfile = payload;
      })
      .addCase(getFSData.rejected, (state) => {
        // console.log(state);
      });
  },
});

// console.log(profileSlice);

export const { collectInputs } = profileSlice.actions;

export default profileSlice.reducer;
