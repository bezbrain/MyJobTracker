import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface State {
  addJobArr: Array<string | number>;
  isRemove: boolean;
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
  isRemove: true,
  inputs: {
    position: "",
    company: "",
    joblocation: "",
    status: "",
    jobType: "",
  },
};

export const submitData = createAsyncThunk("addJob/submitData", async () => {
  try {
    console.log("Anything");
    // Your asynchronous logic here
  } catch (error) {
    console.log(error);
  }
});

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
        console.log(state);
      })
      .addCase(submitData.fulfilled, (state) => {
        console.log(state);
      })
      .addCase(submitData.rejected, (state) => {
        console.log(state);
      });
  },
});

export const { collectInput } = addJobSlice.actions;

export default addJobSlice.reducer;
