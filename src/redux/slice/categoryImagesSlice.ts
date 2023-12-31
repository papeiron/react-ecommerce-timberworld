import { createSlice } from '@reduxjs/toolkit';

export type CategoryImages = [string, string];

const initialState: CategoryImages[] = [
  ['Living room', '/src/assets/img/category-images/category-livingroom.png'],
  ['Kitchen', '/src/assets/img/category-images/category-kitchen.png'],
  ['Bedroom', '/src/assets/img/category-images/category-bedroom.png'],
  ['Bathroom', '/src/assets/img/category-images/category-bathroom.png']
];

export const categoryImagesSlice = createSlice({
  name: 'categoryImages',
  initialState,
  reducers: {}
});
