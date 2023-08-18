import { createSlice } from "@reduxjs/toolkit";

interface Nav {
  isOpenNav: boolean;
  isOpenSmallNav: boolean;
}

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
