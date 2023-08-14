import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addData, colRef } from "../../firebaseStore";
import { toast } from "react-toastify";
import { dateFunc } from "../../date";

const date: string = dateFunc(); // Function to get the current date

interface State {
  addJobArr: Array<string | number>;
  isRemove: boolean;
  isLoading: boolean;
  inputs: {
    id: number;
    position: string;
    company: string;
    joblocation: string;
    status: string;
    jobType: string;
    date: string;
  };
}

const initialState: State = {
  addJobArr: [],
  isRemove: true, // to toggle side base
  isLoading: false, // to activate and deactivate button
  inputs: {
    id: 0,
    position: "",
    company: "",
    joblocation: "",
    status: "",
    jobType: "",
    date: "",
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
        inputs: { ...state.inputs, date: date, [name]: value },
      };
      return update;
    },

    clearInput: (state) => {
      state.inputs.position = "";
      state.inputs.company = "";
      state.inputs.joblocation = "";
      state.inputs.status = "";
      state.inputs.jobType = "";
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
        toast.success("Job Add Successfully");
      })
      .addCase(submitData.rejected, (state, { payload }) => {
        console.log(state);
        console.log(payload);
      });
  },
});

export const { collectInput, clearInput } = addJobSlice.actions;

export default addJobSlice.reducer;
