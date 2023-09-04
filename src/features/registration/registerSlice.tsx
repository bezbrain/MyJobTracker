import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegState } from "../../model";
import { addData, auth, signUp, userInfoColRef } from "../../firebaseStore";
import { toast } from "react-toastify";
import { extratingErrorMsg, setUserId, getUserId } from "../../DBSnapShot";

const initialState: RegState = {
  isLoading: false, // to control loading content in reg btn
  isDisable: false, // to disable btn until request is complete
  user: {
    createdBy: "",
    username: "",
    email: "",
    password: "",
  },
};

export const reg = createAsyncThunk(
  "register/reg",
  async (details: any, thunkAPI) => {
    try {
      const { username, email, password, setToggleReg } = details;
      const cred = await signUp(auth, email, password);
      const userId = cred.user.uid;
      setUserId(userId); // Set user id to local storage

      setTimeout(() => {
        // Timeout to navigate to login when user is authenticated
        toast.success("Please Login");
        setToggleReg(true);
      }, 3000);

      // Send user details to firestore when user registers so that this info will be used in dashboard and profile page
      const userId2 = getUserId();
      await addData(userInfoColRef, {
        userId2,
        username,
        email,
        location: "",
        firstName: "",
        lastName: "",
      });
    } catch (error: any) {
      const errorMsg = error.message;
      return thunkAPI.rejectWithValue(extratingErrorMsg(errorMsg));
    }
  }
);

const regSlice = createSlice({
  name: "reg",
  initialState,
  reducers: {
    // Collect input values on the reg page
    getRegValues: (
      state,
      { payload }: PayloadAction<{ name: keyof RegState; value: any }>
    ) => {
      const { name, value } = payload;
      state.user = { ...state.user, [name]: value };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(reg.pending, (state) => {
        state.isLoading = true;
        state.isDisable = true;
      })
      .addCase(reg.fulfilled, (state) => {
        state.user.username = "";
        state.user.email = "";
        state.user.password = "";
        toast.success("Registration Successful");
        state.isLoading = false;
        state.isDisable = false;
      })
      .addCase(reg.rejected, (state, { payload }) => {
        if (typeof payload === "string") {
          toast.error(payload); // Assuming payload is now a string error message
        } else {
          // If payload is not a string, convert the error message and then show it
          toast.error(JSON.stringify(payload));
        }
        state.isLoading = false;
        state.isDisable = false;
      });
  },
});

export default regSlice.reducer;

export const { getRegValues } = regSlice.actions;
