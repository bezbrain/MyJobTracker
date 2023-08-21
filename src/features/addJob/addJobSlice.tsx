import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addData, colRef, getSingleDoc, updateInfo } from "../../firebaseStore";
import { toast } from "react-toastify";
import { dateFunc } from "../../date";
import { AddJobState } from "../../model";

const date: string = dateFunc(); // Function to get the current date

const getUserId = localStorage.getItem("userId");

// console.log(getUserId);

const initialState: AddJobState = {
  addJobArr: [],
  isRemove: true, // to toggle side base
  isLoading: false, // to activate and deactivate button
  inputs: {
    createdBy: getUserId,
    position: "",
    company: "",
    joblocation: "",
    status: "",
    jobType: "",
    date: "",
  },
};

// Send data to firestore
export const submitData = createAsyncThunk(
  "addJob/submitData",
  async (jobData: AddJobState["inputs"], thunkAPI) => {
    try {
      // console.log(thunkAPI.getState());

      await addData(colRef, jobData);
      return jobData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update data in firestore
export const updateData = createAsyncThunk(
  "addJob/updateData",
  async (_, thunkAPI) => {
    try {
      const state: any = thunkAPI.getState();
      const { docRef, ...newObj } = state.editJobStore.stagedJob;
      await updateInfo(docRef, {
        ...state.addJobStore.inputs,
      });

      return newObj;
    } catch (error) {
      console.log(error);
    }
  }
);

const addJobSlice = createSlice({
  name: "addJob",
  initialState,
  reducers: {
    collectInput: (state, action) => {
      const { name, value } = action.payload;

      const update: AddJobState = {
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

    stageInput: (state, { payload }) => {
      state.inputs = {
        ...state.inputs,
        ...payload,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(submitData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitData.fulfilled, (state, { payload }) => {
        // state.inputs = payload;
        state.inputs.position = "";
        state.inputs.company = "";
        state.inputs.joblocation = "";
        state.inputs.status = "";
        state.inputs.jobType = "";
        state.isLoading = false;
        toast.success("Job Added Successfully");
      })
      .addCase(submitData.rejected, (state, { payload }) => {
        console.log(state);
        console.log(payload);
      });
    builder
      .addCase(updateData.pending, (state) => {
        console.log(state);
      })
      .addCase(updateData.fulfilled, (state, { payload }) => {
        state.inputs.position = "";
        state.inputs.company = "";
        state.inputs.joblocation = "";
        state.inputs.status = "";
        state.inputs.jobType = "";
        toast.success("Job Updated Successfully");
      })
      .addCase(updateData.rejected, (state) => {
        console.log(state);
      });
  },
});

export const { collectInput, clearInput, stageInput } = addJobSlice.actions;

export default addJobSlice.reducer;
