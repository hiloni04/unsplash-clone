import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from '../features/images/imagesSlice';
import pageReducer from '../features/page/pageSlice'

const store = configureStore({
  reducer: {
    images: imagesReducer,
    page: pageReducer
  },
});

export default store;