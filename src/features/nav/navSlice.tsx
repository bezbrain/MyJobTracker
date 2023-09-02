import { createSlice } from "@reduxjs/toolkit";
import { Nav } from "../../model";

const initialState: Nav = {
  isOpenNav: false,
  isOpenSmallNav: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,

  reducers: {
    toggleNav: (state) => {
      state.isOpenNav = !state.isOpenNav;
    },

    toggleSmallNav: (state) => {
      state.isOpenSmallNav = true;
    },

    closeSmallNav: (state) => {
      state.isOpenSmallNav = false;
    },
  },
});

export const { toggleNav, toggleSmallNav, closeSmallNav } = navSlice.actions;

export default navSlice.reducer;
