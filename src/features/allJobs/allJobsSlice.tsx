import { createSlice } from "@reduxjs/toolkit";
import { AllJobsState } from "../../model";
import { toast } from "react-toastify";

const initialState: AllJobsState = {
  isLoading: false,
  allJobsInputs: {
    search: "",
    status: "",
    type: "",
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

    clearInputs: (state)=> {
      state.allJobsInputs.search = ""
      state.allJobsInputs.status = ""
      state.allJobsInputs.type = ""
      toast.success("All fields cleared")
    }
  },
});

export default allJobsSlice.reducer;

export const { collectInputs, clearInputs } = allJobsSlice.actions;
