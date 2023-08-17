// import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';



// export const fetchImages = createAsyncThunk(
//   'images/fetchImages',
//   async (searchQuery,page) => {
//     try {
//       if (searchQuery.trim() === '') {
//         return []; 
//       }

//       const response = await axios.get(
//         `${process.env.REACT_APP_API_URL}?query=${searchQuery}&page=${page}&per_page=15&client_id=${process.env.REACT_APP_API_KEY}`
//       );
//      console.log(response)
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }

// );


// const imagesSlice = createSlice({
//   name: 'images',
//   initialState: {
//     images: [],
//     page: 1,
//     searchQuery: '',
//   },
//   reducers: {
//     clearImages(state) {
//       state.images = [];
//     },
//     setSearchQuery(state, action) {
//       state.searchQuery = action.payload;
//     },
//     setPage(state, action) {
//       state.page = action.payload;
//     },
//     addPage(state, action) {
//       state.page =+ 1;
//     },
//   },
//   extraReducers:(builder) => {
//     builder.addCase(fetchImages.fulfilled,(state,action) =>{
//         // state.images = action.payload.results;
//         return [...new Set([...state.images, ...action.payload.results])];
//         state.page += 1; 
//         state.pending = false;
//     })
//     .addCase(fetchImages.pending, (state,action) => {
//        state.pending = true;
//     })
//     .addCase(fetchImages.rejected, (state,action) => {
//         state.error = action.error;
//     })
// }
// });

// export const {  clearImages,setSearchQuery , setPage,addPage} = imagesSlice.actions;

// export default imagesSlice.reducer;


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  images: [],
  searchQuery: '', // Add searchQuery field to the initial state
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