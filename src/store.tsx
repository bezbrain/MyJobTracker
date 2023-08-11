import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./features/nav/navSlice";
import addJobReducer from "./features/addJob/addJobSlice";

export const store = configureStore({
  reducer: {
    navStore: navReducer,
    addJobStore: addJobReducer,
  },
});
