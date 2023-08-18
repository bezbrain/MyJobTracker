import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./features/nav/navSlice";
import addJobReducer from "./features/addJob/addJobSlice";
import allJobsReducer from "./features/allJobs/allJobsSlice";
import editJobReducer from "./features/allJobs/editSlice";
import profileReducer from "./features/profile/profileSlice";

export const store = configureStore({
  reducer: {
    navStore: navReducer,
    addJobStore: addJobReducer,
    allJobsStore: allJobsReducer,
    editJobStore: editJobReducer,
    profileStore: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
