import { createSlice } from "@reduxjs/toolkit";

interface State {
  name: string;
  lastName: string;
  email: string;
  location: string;
}

const initialState: State = {
  name: "",
  lastName: "",
  email: "",
  location: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    //
  },
});

export default profileSlice.reducer;
