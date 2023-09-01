import { createSlice } from "@reduxjs/toolkit";
import { AllJobsState } from "../../model";

const initialState: AllJobsState = {
  isLoading: false,
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
    collectInputs: (state, { payload }) => {
      const { name, value } = payload;
      state.allJobsInputs = { ...state.allJobsInputs, [name]: value };
    },
  },
});

export default allJobsSlice.reducer;

export const { collectInputs } = allJobsSlice.actions;
