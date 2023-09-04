import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "../../model";
import { DocumentReference } from "firebase/firestore";
import {
  singleDoc,
  userInfoColRef,
  getSingleDoc,
  updateInfo,
} from "../../firebaseStore";
import { toast } from "react-toastify";
import { extratingErrorMsg } from "../../DBSnapShot";

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

// Function to get each user data from the firestore
export const getFSData = createAsyncThunk(
  "data/getdata",
  async (payload: any, thunkAPI) => {
    try {
      const { id } = payload;
      const singleRef = singleDoc(userInfoColRef, id);
      const resp = await getSingleDoc(singleRef);
      const data = resp.data();

      return data;
    } catch (error: any) {
      const errorMsg = error.message;
      return thunkAPI.rejectWithValue(extratingErrorMsg(errorMsg));
    }
  }
);

// Function to update data in the firestore
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (userProfile: any, thunkAPI) => {
    try {
      const docRef: DocumentReference = singleDoc(
        userInfoColRef,
        userProfile.fireStoreId
      );

      await updateInfo(docRef, {
        ...userProfile,
      });
    } catch (error: any) {
      const errorMsg = error.message;
      return thunkAPI.rejectWithValue(extratingErrorMsg(errorMsg));
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // Collect inputs from the profile field
    collectInputs: (
      state,
      { payload }: PayloadAction<{ name: keyof ProfileState; value: any }>
    ) => {
      const { name, value } = payload;
      state.userProfile = { ...state.userProfile, [name]: value };
    },
  },

  extraReducers: (builder) => {
    // Get current user profile when the page loads
    builder
      .addCase(getFSData.pending, (state) => {
        return state;
      })
      .addCase(getFSData.fulfilled, (state, { payload }: any) => {
        state.userProfile = payload; // Set the current state to the data in firestore
      })
      .addCase(getFSData.rejected, (state, { payload }: any) => {
        toast.error(payload);
        return state;
      });

    // Update data
    builder
      .addCase(updateProfile.pending, (state) => {
        return state;
      })
      .addCase(updateProfile.fulfilled, () => {
        toast.success("Profile updated");
      })
      .addCase(updateProfile.rejected, (state, { payload }: any) => {
        toast.error(payload);
        return state;
      });
  },
});

export const { collectInputs } = profileSlice.actions;

export default profileSlice.reducer;
