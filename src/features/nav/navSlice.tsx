import { createSlice } from "@reduxjs/toolkit";

interface Nav {
  isOpenNav: boolean;
}

const initialState: Nav = {
  isOpenNav: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isOpenNav = !state.isOpenNav;
    },
  },
});

export const { toggleNav } = navSlice.actions;

export default navSlice.reducer;
