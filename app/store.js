import { configureStore } from "@reduxjs/toolkit";
import allCandiesReducer from './features/allCandiesSlice';

export const store = configureStore({
  reducer: {
    allCandies: allCandiesReducer
  },
});

export default store;
