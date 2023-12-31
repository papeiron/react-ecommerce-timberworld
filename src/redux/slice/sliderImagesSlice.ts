import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [
  '/public/hero-images/livingroom-2.png',
  '/public/hero-images/bathroom-1.png',
  '/public/hero-images/kitchen-1.png'
];

export const sliderImagesSlice = createSlice({
  name: 'heroImages',
  initialState,
  reducers: {}
});
