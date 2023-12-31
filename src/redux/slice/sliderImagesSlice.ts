import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [
  '/src/assets/img/hero-images/livingroom-2.png',
  '/src/assets/img/bathroom-1.png',
  '/src/assets/img/kitchen-1.png'
];

export const sliderImagesSlice = createSlice({
  name: 'heroImages',
  initialState,
  reducers: {}
});
