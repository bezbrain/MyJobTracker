import { createSlice } from "@reduxjs/toolkit";

interface State {
  allJobsInputs: {
    search: string;
    status: string;
    type: string;
    sort: string;
  };
}

const initialState: State = {
  allJobsInputs: {
    search: "",
    status: "",
    type: "",
    sort: "",
  },
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    //
  },
});

export default allJobsSlice.reducer;
