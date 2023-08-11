import { createSlice } from "@reduxjs/toolkit";

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

    submitData: (state) => {
      console.log(state);
    },
  },
});

export const { collectInput, submitData } = addJobSlice.actions;

export default addJobSlice.reducer;
