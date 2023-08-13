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
    collectInputs: (state, { payload }) => {
      // console.log(state);
      const { name, value } = payload;

      const update = {
        ...state,
        allJobsInputs: {
          ...state.allJobsInputs,
          id: Date.now(),
          [name]: value,
        },
      };

      return update;
    },
  },
});

export default allJobsSlice.reducer;

export const { collectInputs } = allJobsSlice.actions;
