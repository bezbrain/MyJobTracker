import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../../model";
import { auth, signIn } from "../../firebaseStore";

const initialState: LoginState = {
  login_createdBy: "",
  login_email: "",
  login_password: "",
};

export const login = createAsyncThunk(
  "login/login",
  async (details: any, thunkAPI) => {
    try {
      const { login_createdBy, login_email, login_password } = details;

      const cred = await signIn(auth, login_email, login_password);
      // console.log(cred.user.uid);
      const userId = cred.user.uid;
      localStorage.setItem("userId", userId);
    } catch (error) {
      console.log(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLoginValues: (state, { payload }) => {
      const { name, value } = payload;
      const updatedState: LoginState = {
        ...state,
        [name]: value,
      };
      return updatedState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        console.log(state);
      })
      .addCase(login.fulfilled, (state) => {
        console.log(state);
      })
      .addCase(login.rejected, (state) => {
        console.log(state);
      });
  },
});

export default loginSlice.reducer;

export const { getLoginValues } = loginSlice.actions;
