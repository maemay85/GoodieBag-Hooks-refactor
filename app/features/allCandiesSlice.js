import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {candies: []}

export const fetchAllCandies = createAsyncThunk('candies/fetch', async () => {
  try {
    const { data } = await axios.get('/api/candies');
    return data;
  } catch (err) {
    console.error('ran into a problem with fetchAllCandies: ', err)
  }
})

const allCandiesSlice = createSlice({
  name: 'candies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllCandies.fulfilled, (state, action) => {
      state.candies = action.payload;
    });
  },
})

export default allCandiesSlice.reducer;
