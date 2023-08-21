import { createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../../model";

const initialState: LoginState = {
  login_email: "",
  login_password: "",
};

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
});

export default loginSlice.reducer;

export const { getLoginValues } = loginSlice.actions;
