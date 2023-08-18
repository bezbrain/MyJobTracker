import { createSlice } from "@reduxjs/toolkit";
import { AllJobsState } from "../../model";

const initialState: AllJobsState = {
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

      const update = {
        ...state,
        allJobsInputs: {
          ...state.allJobsInputs,
          [name]: value,
        },
      };

      return update;
    },
  },
});

export default allJobsSlice.reducer;

export const { collectInputs } = allJobsSlice.actions;
