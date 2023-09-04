import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EditState } from "../../model";
import { extratingErrorMsg } from "../../DBSnapShot";
import { toast } from "react-toastify";

const initialState: EditState = {
  btnContent: "Submit",
  stagedJob: null,
};

export const editJob = createAsyncThunk(
  "allJobs/editJob",
  async (getJob: any, thunkAPI) => {
    try {
      return await getJob;
    } catch (error: any) {
      const errorMsg = error.message;
      return thunkAPI.rejectWithValue(extratingErrorMsg(errorMsg));
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
      .addCase(editJob.pending, (state) => {
        return state;
      })
      .addCase(editJob.fulfilled, (state, { payload }) => {
        state.btnContent = "Update";
        state.stagedJob = payload;
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        if (typeof payload === "string") {
          toast.error(payload); // Assuming payload is now a string error message
        } else {
          // If payload is not a string, convert the error message and then show it
          toast.error(JSON.stringify(payload));
        }
        return state;
      });
  },
});

export const { changeTextContent } = editSlice.actions;

export default editSlice.reducer;
