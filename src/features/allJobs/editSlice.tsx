import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EditState } from "../../model";

const initialState: EditState = {
  btnContent: "Submit",
  stagedJob: null,
};

export const editJob = createAsyncThunk(
  "allJobs/editJob",
  async (getJob: any, thunkAPI) => {
    try {
      console.log(getJob);
      return await getJob;
    } catch (error) {
      console.log(error);
    }
  }
);

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    changeTextContent: (state) => {
      state.btnContent = "Submit";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editJob.pending, (state, { payload }) => {
        console.log(state);
      })
      .addCase(editJob.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.btnContent = "Update";
        state.stagedJob = payload;
      })
      .addCase(editJob.rejected, (state) => {
        console.log(state);
      });
  },
});

// console.log(editSlice);

export const { changeTextContent } = editSlice.actions;

export default editSlice.reducer;
