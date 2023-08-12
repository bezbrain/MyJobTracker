import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addData, colRef } from "../../firebaseStore";

interface State {
  addJobArr: Array<string | number>;
  isRemove: boolean;
  isLoading: boolean;
  inputs: {
    position: string;
    company: string;
    joblocation: string;
    status: string;
    jobType: string;
  };
}

const initialState: State = {
  addJobArr: [],
  isRemove: true, // to toggle side base
  isLoading: false, // to activate and deactivate button
  inputs: {
    position: "",
    company: "",
    joblocation: "",
    status: "",
    jobType: "",
  },
};

export const submitData = createAsyncThunk(
  "addJob/submitData",
  async (jobData: any, thunkAPI) => {
    try {
      await addData(colRef, jobData);
      return jobData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addJobSlice = createSlice({
  name: "addJob",
  initialState,
  reducers: {
    collectInput: (state, action) => {
      const { name, value } = action.payload;

      const update: State = {
        ...state,
        inputs: { ...state.inputs, [name]: value },
      };
      return update;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(submitData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitData.fulfilled, (state, { payload }) => {
        state.inputs = payload;
        state.inputs.position = "";
        state.inputs.company = "";
        state.inputs.joblocation = "";
        state.inputs.status = "";
        state.inputs.jobType = "";
        state.isLoading = false;
      })
      .addCase(submitData.rejected, (state, { payload }) => {
        console.log(state);
        console.log(payload);
      });
  },
});

export const { collectInput } = addJobSlice.actions;

export default addJobSlice.reducer;
