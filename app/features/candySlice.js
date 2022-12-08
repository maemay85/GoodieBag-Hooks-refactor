import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {candy: {}}

export const fetchOneCandy = createAsyncThunk('candy/fetch', async (id) => {
  try {
    const { data } = await axios.get(`/api/candies/${id}`);
    return data;
  } catch (err) {
    console.error('ran into a problem with fetchOneCandy: ', err)
  }
})

export const candySlice = createSlice({
  name: 'candy',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOneCandy.fulfilled, (state, action) => {
      state.candy = action.payload;
    });
  },
});

export const selectCandy = (state) => state.candy

export default candySlice.reducer;
