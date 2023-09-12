import { createSlice } from "@reduxjs/toolkit";
import { ContactUsProps } from "../../model";

const initialState: ContactUsProps = {
  loading: false,
  users: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    collectInputs: (state, { payload }) => {
      const { name, value } = payload;
      state.users = { ...state.users, [name]: value };
    },

    clearFields: (state) => {
      state.users.name = "";
      state.users.email = "";
      state.users.subject = "";
      state.users.message = "";
    },
  },
});

export const { collectInputs, clearFields } = contactSlice.actions;

export default contactSlice.reducer;
