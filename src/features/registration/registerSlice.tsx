import { createSlice } from "@reduxjs/toolkit";
import { RegState } from "../../model";

const initialState: RegState = {
  name: "",
  email: "",
  password: "",
};

const regSlice = createSlice({
  name: "reg",
  initialState,
  reducers: {
    //
  },
});

export default regSlice.reducer;
