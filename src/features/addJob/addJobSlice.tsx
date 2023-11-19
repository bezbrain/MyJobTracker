import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addData, colRef, updateInfo } from "../../firebaseStore";
import { toast } from "react-toastify";
import { dateFunc } from "../../date";
import { AddJobState } from "../../model";
import { clearFields } from "../featureUtils";
import { extratingErrorMsg } from "../../DBSnapShot";

const date: string = dateFunc(); // Function to get the current date

const initialState: AddJobState = {
  addJobArr: [],
  isRemove: true, // to toggle side base
  jobLoading: false, // to show loading state
  jobDisable: false, // to activate and deactivate button
  inputs: {
    createdBy: "",
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
      await addData(colRef, jobData);
      return jobData;
    } catch (error: any) {
      const errorMsg = error.message;
      return thunkAPI.rejectWithValue(extratingErrorMsg(errorMsg));
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
      console.log(state.editJobStore.stagedJob);

      await updateInfo(docRef, {
        ...state.addJobStore.inputs,
      });

      return newObj;
    } catch (error: any) {
      const errorMsg = error.message;
      return thunkAPI.rejectWithValue(extratingErrorMsg(errorMsg));
    }
  }
);

const addJobSlice = createSlice({
  name: "addJob",
  initialState,
  reducers: {
    // Collect all inputs on the add job page
    collectInput: (state, action) => {
      const { name, value } = action.payload;
      state.inputs = {
        ...state.inputs,
        date: date,
        [name]: value,
      };
    },
    // Clear input fields when submit button is clicked
    clearInput: (state) => {
      clearFields(state); // This function is in a separate file that handles clearing of input fields
    },
    // Stage add job input fields when edit btn is clicked
    stageInput: (state, { payload }) => {
      state.inputs = {
        ...state.inputs,
        ...payload,
      };
    },
  },

  extraReducers: (builder) => {
    // Add Job functionality
    builder
      .addCase(submitData.pending, (state) => {
        state.jobLoading = true;
        state.jobDisable = true;
      })
      .addCase(submitData.fulfilled, (state) => {
        clearFields(state);
        toast.success("Job Added Successfully");
        state.jobLoading = false;
        state.jobDisable = false;
      })
      .addCase(submitData.rejected, (state, { payload }: any) => {
        toast.error(payload);
        state.jobLoading = false;
        state.jobDisable = false;
      });

    // Update functionality
    builder
      .addCase(updateData.pending, (state) => {
        state.jobLoading = true;
        state.jobDisable = true;
      })
      .addCase(updateData.fulfilled, (state, { payload }) => {
        clearFields(state);
        toast.success("Job Updated Successfully");
        state.jobLoading = false;
        state.jobDisable = false;
      })
      .addCase(updateData.rejected, (state, { payload }: any) => {
        toast.error(payload);
        state.jobLoading = false;
        state.jobDisable = false;
      });
  },
});

export const { collectInput, clearInput, stageInput } = addJobSlice.actions;

export default addJobSlice.reducer;
