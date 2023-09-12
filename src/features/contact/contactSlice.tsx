import { createSlice } from "@reduxjs/toolkit";
import { ContactUsProps } from "../../model";

const initialState: ContactUsProps = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    collectInputs: (state, payload) => {
      //
    },
  },
});

export const { collectInputs } = contactSlice.actions;

export default contactSlice.reducer;
