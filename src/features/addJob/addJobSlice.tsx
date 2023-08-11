import { createSlice } from "@reduxjs/toolkit";

interface State {
  isRemove: boolean;
}

const initialState: State = {
  isRemove: true,
};

const addJobSlice = createSlice({
  name: "addJob",
  initialState,
  reducers: {
    // removeSelect: (state) => {
    //   console.log(state);
    //   state.isRemove = true;
    // },
  },
});

// export const { removeSelect } = addJobSlice.actions;

export default addJobSlice.reducer;
