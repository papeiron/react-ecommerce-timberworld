import { createSlice } from '@reduxjs/toolkit';

export type CategoryImages = [string, string];

const initialState: CategoryImages[] = [
  ['Living room', '/public/category-images/category-livingroom.png'],
  ['Kitchen', '/public/category-images/category-kitchen.png'],
  ['Bedroom', '/public/category-images/category-bedroom.png'],
  ['Bathroom', '/public/category-images/category-bathroom.png']
];

export const categoryImagesSlice = createSlice({
  name: 'categoryImages',
  initialState,
  reducers: {}
});
