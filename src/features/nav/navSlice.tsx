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
    // Toggle side/nav bar at bigger screen
    toggleNav: (state) => {
      state.isOpenNav = !state.isOpenNav;
    },
    // Open side/nav bar at small screen
    toggleSmallNav: (state) => {
      state.isOpenSmallNav = true;
    },
    // Close side/nav bar at small screen
    closeSmallNav: (state) => {
      state.isOpenSmallNav = false;
    },
  },
});

export const { toggleNav, toggleSmallNav, closeSmallNav } = navSlice.actions;

export default navSlice.reducer;
