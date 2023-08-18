


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  images: [],
  searchQuery: '', 
};

export const fetchImages = createAsyncThunk(
  'data/fetchImages',
  async ({ searchQuery, page }) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}?query=${searchQuery}&page=${page}&per_page=15&client_id=${process.env.REACT_APP_API_KEY}`
    );
    return response.data.results;
  }
);

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    clearImages(state, action) {
      state.images = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.images = [...state.images, ...action.payload];
      })
      .addCase(fetchImages.pending, (state, action) => {
        state.searchQuery = action.meta.arg.searchQuery; // Update searchQuery when fetchImages is pending
      })
      .addCase(fetchImages.rejected, (state, action) => {
        // Handle error if needed
      });
  },
});

export const { clearImages } = imageSlice.actions;

export default imageSlice.reducer;
