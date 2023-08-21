import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegState } from "../../model";
import { addData, auth, signUp, userIdColRef } from "../../firebaseStore";
import { toast } from "react-toastify";

const initialState: RegState = {
  createdBy: "",
  username: "",
  email: "",
  password: "",
};

export const reg = createAsyncThunk(
  "register/reg",
  async (details: RegState) => {
    try {
      // console.log(details);
      const { email, password } = details;
      const cred = await signUp(auth, email, password);
      // const userId = cred.user.uid;
      // return cred.user.uid;
    } catch (error: any) {
      console.log(error);
    }
  }
);

const regSlice = createSlice({
  name: "reg",
  initialState,
  reducers: {
    getRegValues: (state, { payload }) => {
      const { name, value } = payload;
      const updatedState: RegState = {
        ...state,
        [name]: value,
      };
      return updatedState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(reg.pending, (state) => {
        console.log(state);
      })
      .addCase(reg.fulfilled, (state, { payload }) => {
        // console.log(payload);
        // state.createdBy = payload;
        state.username = "";
        state.email = "";
        state.password = "";
        toast.success("Registration Successful");
      })
      .addCase(reg.rejected, (state) => {
        console.log(state);
      });
  },
});

export default regSlice.reducer;

export const { getRegValues } = regSlice.actions;
