import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegState } from "../../model";
import { auth, signIn } from "../../firebaseStore";

const initialState: RegState = {
  username: "",
  email: "",
  password: "",
};

export const reg = createAsyncThunk("register/reg", async (details) => {
  try {
    // const cred = await signIn(auth, )
    console.log(details);
  } catch (error: any) {
    console.log(error);
  }
});

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
      .addCase(reg.fulfilled, (state) => {
        console.log(state);
      })
      .addCase(reg.rejected, (state) => {
        console.log(state);
      });
  },
});

export default regSlice.reducer;

export const { getRegValues } = regSlice.actions;
