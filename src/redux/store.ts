import { configureStore } from '@reduxjs/toolkit';
import { productApiSlice } from './api/productApiSlice';
import { filterSlice } from './slice/filterSlice';
import { sliderImagesSlice } from './slice/sliderImagesSlice';
import { categoryImagesSlice } from './slice/categoryImagesSlice';
import { cartSlice } from './slice/cartSlice';
import { collectionSlice } from './slice/collectionSlice';

const store = configureStore({
  reducer: {
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    filters: filterSlice.reducer,
    sliderImages: sliderImagesSlice.reducer,
    categoryImages: categoryImagesSlice.reducer,
    cart: cartSlice.reducer,
    collections: collectionSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productApiSlice.middleware);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
