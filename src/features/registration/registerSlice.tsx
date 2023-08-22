import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegState } from "../../model";
import { addData, auth, signUp, userIdColRef } from "../../firebaseStore";
import { toast } from "react-toastify";
import { extratingErrorMsg, setUserId } from "../../DBSnapShot";

const initialState: RegState = {
  createdBy: "",
  username: "",
  email: "",
  password: "",
};

export const reg = createAsyncThunk(
  "register/reg",
  async (details: any, thunkAPI) => {
    try {
      // console.log(details);
      const { username, email, password, setToggleReg } = details;
      setUserId(username); // Set the username into the local storage so that it'll be used in dashboard
      const cred = await signUp(auth, email, password);
      setTimeout(() => {
        // Timeout to navigate to login when user is authenticated
        toast.success("Please Login");
        setToggleReg(true);
      }, 3000);
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
    getRegValues: (
      state,
      { payload }: PayloadAction<{ name: keyof RegState; value: any }>
    ) => {
      const { name, value } = payload;
      state[name] = value;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(reg.pending, (state) => {
        console.log(state);
      })
      .addCase(reg.fulfilled, (state, { payload }) => {
        state.username = "";
        state.email = "";
        state.password = "";
        toast.success("Registration Successful");
      })
      .addCase(reg.rejected, (state, { payload }) => {
        if (typeof payload === "string") {
          toast.error(payload); // Assuming payload is now a string error message
        } else {
          // If payload is not a string, convert the error message and then show it
          toast.error(JSON.stringify(payload));
        }
      });
  },
});

export default regSlice.reducer;

export const { getRegValues } = regSlice.actions;
